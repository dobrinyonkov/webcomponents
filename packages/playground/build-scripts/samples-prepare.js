const fs = require('fs');
const path = require('path');
const prependFile = require('prepend-file');
const replace = require('replace-in-file');
const cheerio = require('cheerio');

const template = fs.readFileSync(path.join(__dirname, '../stories/template.mdx'), 'utf8');
const packages = [
	"fiori",
	"main",
];

const components = [];

 // Add new components here
const newComponents = [
	"Menu",
];

packages.forEach(package => {
	const samplesPath = `../${package}/dist/test-resources/api/`;

	var files = fs.readdirSync(samplesPath);

	//handling error
	if (!files) {
		return console.log('Unable to scan directory: ' + err);
	}

	files.forEach(file => {
		components.push(file);
	});
});

components.sort();

packages.forEach(package => {
	const samplesPath = `../${package}/dist/test-resources/api/`;
	const apiPath = `../${package}/dist/api.json`;

	const api = JSON.parse(fs.readFileSync(path.join(apiPath), 'utf8'));

	fs.readdir(samplesPath, (err, files) => {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}
		files.forEach((file, index) => {
			//Copy samples
			fs.copyFileSync(path.join(samplesPath, file), path.join(process.cwd(), `/docs/components/${file}`));

			//Read file
			const fileContent = fs.readFileSync(path.join(process.cwd(), `/docs/components/${file}`));
			const $ = cheerio.load(fileContent);

			const snippets = [];

			$('.snippet').each((i, snippet) => {
				const section = $(snippet).parent();
				section.find("pre").remove();

				snippets.push(section.html().trim());
			});

			fs.writeFileSync(path.join(process.cwd(), `/docs/components/${file.replace('.sample.html', '.stories.mdx')}`), getStory(api, file.split('.')[0], snippets))
		});
	});
});

function getAPI(api, module) {
	const args = {};
	const moduleAPI = api.symbols.find(s => s.module === module);
	
	if (moduleAPI?.properties) {
		moduleAPI.properties.forEach(prop => {
			args[prop.name] = {
				description: prop.description,
				control: prop.type,
				table: {
					defaultValue: {
						summary: prop.defaultValue,
					}
				},
			};
		});
	}

	if (moduleAPI?.slots) {
		moduleAPI.slots.forEach(prop => {
			args[prop.name] = {
				description: prop.description,
				control: prop.type,
			};
		});
	}

	return {
		args,
		name: moduleAPI.basename,
		description: moduleAPI.description
	};
}

function getStory(api, module, snippets) {
	const data = getAPI(api, module);

	console.error(snippets);
	console.error("---------------")
	
	const stories = snippetsToStories(snippets);

	const storyContent = template
		.replace(/{{stories}}/g, stories.join("\n"))
		.replace(/{{name}}/g, data.name)
		.replace(/{{description}}/g, data.description)
		.replace(/{{args}}/g, JSON.stringify(data.args), null, 2); // spacing level = 2

	return storyContent;
};

function snippetsToStories(snippets) {
	return snippets.map((snippet, index) => {
		return `
<Preview>
	<Story name="default-${index}">
		{html\`${snippet}\`}
	</Story>
</Preview>`
	});
}