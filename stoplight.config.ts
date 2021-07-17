import { DevPortalConfig } from './plugin';

export const config: DevPortalConfig = {
  // This is marbemac.stoplight.io
  workspaceId: 'd2s6OA',

  statusPage: {
    url: 'https://status.stoplight.io',
  },

  theme: {
    maxContentWidth: 1600,
    minSidebarWidth: 280,
  },

  projects: {
    platform: { id: 'cHJqOjczODI1', route: '/docs/platform' },
    elements: { id: 'cHJqOjczODI0', route: '/docs/elements' },
    prism: { id: 'cHJqOjE1', route: '/docs/prism' },
    spectral: { id: 'cHJqOjE0', route: '/docs/spectral' },
    api: { id: 'cHJqOjU', route: '/docs/api' },
    'studio-demo': { id: 'cHJqOjczODIy', route: '/docs/studio-demo' },
  },

  social: {
    twitter: 'https://twitter.com/stoplightio',
    github: 'https://github.com/stoplightio',
    linkedIn: 'https://www.linkedin.com/company/stoplight',
    rss: 'https://stoplight.io/rss/index.xml',
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
        title: 'Guides',
        href: '/docs/guides',
      },

      {
        title: 'Reference',
        children: [
          {
            title: 'Styleguides with Spectral',
            project: 'spectral',
            icon: ['fal', 'clipboard-list-check'],
          },

          {
            title: 'Mock with Prism',
            project: 'prism',
            icon: ['fal', 'server'],
          },

          {
            title: 'Docs with Elements',
            project: 'elements',
            icon: ['fal', 'puzzle-piece'],
          },

          {
            title: 'Stoplight API',
            project: 'api',
            icon: ['fal', 'bolt'],
          },

          {
            title: 'Studio Demo',
            project: 'studio-demo',
            icon: ['fal', 'paint-brush'],
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
