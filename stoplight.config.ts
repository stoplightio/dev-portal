import { DevPortalConfig } from './plugin';

export const config: DevPortalConfig = {
  // This is meta.stoplight.io
  workspaceId: 'd2s6NA',

  statusPage: {
    url: 'https://status.stoplight.io',
  },

  theme: {
    maxContentWidth: 1600,
    minSidebarWidth: 280,
  },

  projects: {
    platform: { id: 'cHJqOjI', route: '/docs/platform' },
    changelog: { id: 'cHJqOjQ4Njc3', route: '/docs/changelog' },
    elements: { id: 'cHJqOjQxODY', route: '/docs/elements' },
    prism: { id: 'cHJqOjM', route: '/docs/prism' },
    spectral: { id: 'cHJqOjQ', route: '/docs/spectral' },
    studio: { id: 'cHJqOjU', route: '/docs/studio' },
    api: { id: 'cHJqOjExMDM2Mg', route: '/docs/api' },
  },

  social: {
    twitter: 'https://twitter.com/stoplightio',
    github: 'https://github.com/stoplightio',
    linkedIn: 'https://www.linkedin.com/company/stoplight',
    rss: 'https://stoplight.io/rss/index.xml',
  },

  fontAwesome: {
    kitCode: '112906ba2e',
    defaultIconStyle: 'fal',
  },

  siteHeader: {
    left: [
      {
        title: 'Stoplight',
        href: '/',
        // @ts-expect-error
        icon: ['fak', 'stoplight'],
      },

      {
        title: 'Docs',
        project: 'platform',
      },

      {
        title: 'Changelog',
        href: '/docs/changelog',
      },

      {
        title: 'Reference',
        children: [
          {
            title: 'Design with Studio',
            project: 'studio',
            icon: ['fal', 'drafting-compass'],
          },

          {
            title: 'Docs with Elements',
            project: 'elements',
            icon: ['fal', 'puzzle-piece'],
          },

          {
            title: 'Mock with Prism',
            project: 'prism',
            icon: ['fal', 'server'],
          },

          {
            title: 'Styleguides with Spectral',
            project: 'spectral',
            icon: ['fal', 'clipboard-list-check'],
          },

          {
            title: 'Stoplight API',
            project: 'api',
            icon: ['fal', 'brackets-curly'],
          },
        ],
      },

      {
        type: 'search',
      },
    ],

    middle: [],

    right: [
      {
        title: 'Blog',
        href: 'https://stoplight.io/blog',
      },

      {
        title: 'Support',
        href: '/support',
      },

      {
        title: 'Sign In',
        href: 'https://stoplight.io/welcome',
      },

      {
        type: 'theme_switcher',
      },
    ],
  },

  siteFooter: {
    copyright: 'Copyright © 2021 Stoplight',
    resources: [
      {
        title: 'Roadmap',
        href: 'https://roadmap.stoplight.io',
      },

      {
        title: 'Contact Us',
        href: 'mailto:support@stoplight.io',
      },

      {
        title: 'Privacy',
        href: 'https://stoplight.io/privacy/',
      },

      {
        title: 'Terms of Service',
        href: 'https://stoplight.io/terms/',
      },
    ],
  },
};
