import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import packageJson from "./package.json";


console.log("DEPLOYMENT_TYPE", process.env.DEPLOYMENT_TYPE); // eslint-disable-line

const LATEST_URL_PARTH = "/webcomponents/";
const NIGHTLY_URL_PARTH = "/webcomponents/nightly/";
const PR_URL_PARTH = `/webcomponents/pr-${process.env.BRANCH_NAME || 'unknown'}/`;

const LATEST_DEPLOYMENT = process.env.DEPLOYMENT_TYPE === "latest";
const PR_DEPLOYMENT = process.env.DEPLOYMENT_TYPE === "pr";
const DEVELOPMENT_ENVIRONMENT =  process.env.NODE_ENV === "development";

const getBaseURL = () => {
  // localhost
  if (DEVELOPMENT_ENVIRONMENT) {
    return "/";
  }

  // PR deployment
  if (PR_DEPLOYMENT) {
    return PR_URL_PARTH;
  }

  // latest deployment or nightly deployment
  return LATEST_DEPLOYMENT ? LATEST_URL_PARTH : NIGHTLY_URL_PARTH;
};

const BASE_URL = getBaseURL();

// Dynamically determine repository owner and project name
const getRepositoryInfo = () => {
  // In GitHub Actions, GITHUB_REPOSITORY contains "owner/repo"
  // Fall back to parsing git remote URL if not available
  let githubRepository = process.env.GITHUB_REPOSITORY;
  
  if (!githubRepository) {
    // This is a fallback for local development - in practice, 
    // the website deployment should always have GITHUB_REPOSITORY set
    githubRepository = 'ui5/webcomponents';
  }
  
  const [owner, repo] = githubRepository.split('/');
  return { owner, repo };
};

const { owner: REPO_OWNER, repo: REPO_NAME } = getRepositoryInfo();

const getFullURL = () => {
  return DEVELOPMENT_ENVIRONMENT ? `${BASE_URL}` : `https://${REPO_OWNER}.github.io${BASE_URL}`
}

// ["v1", "nightly", "current", "pr"]
const siteVersion = LATEST_DEPLOYMENT ? (packageJson.version.startsWith("1") ? "v1" : "current") : (PR_DEPLOYMENT ? "pr" : "nightly");

const config: Config = {
  customFields: {
    ui5Version: packageJson.version,
    ui5DeploymentType: process.env.DEPLOYMENT_TYPE,
    urlShortenerApiKey: process.env.URL_SHORTENER_API_KEY,
  },
  title: 'UI5 Web Components',
  tagline: 'An open-source UI components library for building enterprise-ready applications!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${REPO_OWNER}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: BASE_URL,
  // github pages makes a redirect to a trailing slash url, which prevents pages from being crawled by google
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: REPO_OWNER, // Usually your GitHub org/user name.
  projectName: REPO_NAME, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: ['public', 'static', 'local-cdn'],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: {
          blogSidebarTitle: 'All our posts',
          blogSidebarCount: 'ALL',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    function() {
      return {
        name: 'environment-variables',
        configureWebpack() {
          return {
            plugins: [
              new (require('webpack')).DefinePlugin({
                'process.env.URL_SHORTENER_API_KEY': JSON.stringify(process.env.URL_SHORTENER_API_KEY)
              })
            ]
          };
        }
      };
    }
  ],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: '622UUS4QSN',

      // Public API key: it is safe to commit it
      apiKey: '27580e2427e91972e5385a935bafb0a1',

      indexName: 'sapio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {
        facetFilters: [`version:${siteVersion}`],
      },

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'UI5 Web Components',
      logo: {
        alt: 'UI5 Web Components Logo',
        src: 'img/logos/LogoWater.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Docs',
          activeBasePath: 'docs',
        },
        {
          to: 'blog',
          label: 'Blog',
          activeBasePath: 'blog',
        },
        {
          to: 'components/',
          label: 'Components',
          activeBasePath: 'components',
        },
        {
          to: 'icons/',
          label: 'Icons',
          activeBasePath: 'icons',
        },
        {
          to: 'play/',
          label: 'Playground',
          activeBasePath: 'play',
        },
        {
          type: 'custom-versionsNavbarItem',
          position: "right",
        },
        {
          type: 'custom-settingsNavbarItem',
          position: "right",
        },
        {
          type: 'custom-GitHubNavbarItem',
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© Copyright ${new Date().getFullYear()}, SAP SE and UI5 Web Components Contributors`,
      logo: {
        alt: 'SAP Logo',
        src: 'https://ui5.github.io/webcomponents/img/footer/sap-1920-1440.svg',
        width: 160,
        height: 51,
      },
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/ui5webcomps',
            },
            {
              label: 'Slack',
              to: 'https://openui5.slack.com/',
            },
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/watch?v=9P5Jk4S3438&list=PLHUs_FUbq4dXkQpUt6b4eCXAAjiOg0IC-',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/UI5/webcomponents/',
            },
            // {
            //   html: `
            //   <div style="display: flex; align-items: center;">
            //     <a href="https://twitter.com/ui5webcomps" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
            //       <img src="img/footer/sap-twitter-1920-1440.svg" alt="Twitter" style="width: 2rem; height:2rem;margin-inline-end: 1rem;"/>
            //     </a>
            //     <a href="https://openui5.slack.com/" target="_blank" rel="noreferrer noopener" aria-label="Slack">
            //       <img src="img/footer/sap-slack-1920-1440.svg" alt="Slack" style="width: 2rem; height:2rem;margin-inline-end: 1rem;"/>
            //     </a>
            //     <a href="https://www.youtube.com/watch?v=9P5Jk4S3438&list=PLHUs_FUbq4dXkQpUt6b4eCXAAjiOg0IC-" target="_blank" rel="noreferrer noopener" aria-label="Youtube">
            //       <img src="img/footer/sap-youtube-1920-1440.svg" alt="Youtube" style="width: 2rem; height:2rem;margin-inline-end: 1rem;"/>
            //     </a>
            //     <a href="https://ui5.github.io/webcomponents/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            //       <img src="img/footer/sap-slack-1920-1440.svg" alt="GitHub" style="width: 2rem; height:2rem;margin-inline-end: 1rem;"/>
            //     </a>
            //   </div>
            // `,
            // },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/getting-started/first-steps',
            },
            {
              label: 'FAQ',
              to: 'docs/FAQ/',
            },
          ],
        },
        {
          title: 'Legal & Privacy',
          items: [
            {
              label: 'Privacy',
              href: `${getFullURL()}Privacy`,
            },
            {
              label: 'Legal Disclosure',
              href: 'https://www.sap.com/impressum',
            },
            {
              label: 'Terms of Use',
              href: 'https://www.sap.com/terms-of-use',
            },
            {
              label: 'Trademark',
              href: 'https://www.sap.com/trademark',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Report Issue',
              to: 'https://github.com/UI5/webcomponents/issues/new',
            },
            {
              label: 'Technical Questions',
              to: 'https://openui5.slack.com/',
            },
            {
              label: 'Product Questions',
              to: 'mailto:openui5@sap.com?subject=[UI5 Web Components]',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
