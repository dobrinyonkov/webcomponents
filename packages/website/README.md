# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Automatic PR Deployments

The website is automatically deployed for every pull request to help with testing and collaboration. When you open a PR that modifies relevant files (website, components, themes, etc.), a GitHub Actions workflow will:

1. Build the website with your changes
2. Deploy it to a unique URL: `https://ui5.github.io/webcomponents/pr-{branch-name}/`
3. Comment on the PR with the deployment link
4. Update the deployment on every push to the PR branch
5. Clean up the deployment when the PR is closed

This allows team members to easily preview and test changes before merging.

### Manual Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Development Deployments

The repository also supports manual deployments through GitHub Actions:
- **Nightly builds**: Deployed to `/webcomponents/nightly/`
- **Release builds**: Deployed to `/webcomponents/`
- **Manual builds**: Deploy to any target folder using the "Deploy Website [manual]" workflow
