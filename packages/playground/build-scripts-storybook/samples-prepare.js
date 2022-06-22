const fs = require('fs/promises');
const path = require('path');
const cheerio = require('cheerio');

(async () => {
	const template = await fs.readFile(path.join(__dirname, '../stories/template.mdx'), 'utf8');
	const packages = [
		"fiori",
		"main",
	];

	const components = [];

	// TODO: handle new components 
	// Add new components here
	const newComponents = [
		"Menu",
	];

	packages.forEach(async package => {
		const samplesPath = `../${package}/test/samples/`;

		var files = await fs.readdir(samplesPath);

		//handling error
		if (!files) {
			return console.log('Unable to scan directory: ' + err);
		}

		files.forEach(file => {
			components.push(file);
		});
	});

	components.sort();

	packages.forEach(async package => {
		const samplesPath = `../${package}/test/samples/`;
		const api = JSON.parse((await fs.readFile(`../${package}/dist/api.json`)).toString());


		const files = await fs.readdir(samplesPath);

		files.forEach(async (file) => {
			console.error('Preparing samples...', file);

			//Copy samples
			await fs.copyFile(path.join(samplesPath, file), path.join(process.cwd(), `/docs/components/${file}`));

			//Read file
			let result = (await fs.readFile(path.join(samplesPath, file))).toString();
			const $ = cheerio.load(result);

			const snippets = [];

			$('.snippet').each((i, snippet) => {
				const section = $(snippet).parent();
				section.find("pre").remove();

				snippets.push(section.html().trim());
			});

			await fs.writeFile(path.join(process.cwd(), `/docs/components/${file.replace('.sample.html', '.stories.mdx')}`), getStory(api, file.split('.')[0], snippets))
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
})();
