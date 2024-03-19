/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
        blue: '#7DD4FF',
        gray: '#D9D9D9',
        green: '#29AD08',
        black: '#000000',
        orange: '#ee4d2d',
        lightBlue: '#7EB6D9'
      },
      flexBasis: {
        '1/15': '15%',
        '1/20': '5%'
      },
      backgroundImage: () => ({
        // Logo-icon
        'logo-icon': "url('src/assets/images/icon-images/logo-icon.png')",
        // Home-icon
        'home-icon': "url('src/assets/images/icon-images/normal-home-icon.png')",
        'highlight-home-icon': "url('src/assets/images/icon-images/highlight-home-icon.png')",
        // Write-icon
        'write-icon': "url('src/assets/images/icon-images/normal-write-icon.png')",
        'highlight-write-icon': "url('src/assets/images/icon-images/highlight-write-icon.png')",
        // Story-icon
        'story-icon': "url('src/assets/images/icon-images/normal-story-icon.png')",
        'highlight-story-icon': "url('src/assets/images/icon-images/highlight-story-icon.png')",
        // Reading-List-icon
        'reading-list-icon': "url('src/assets/images/icon-images/normal-reading-list-icon.png')",
        'highlight-reading-list-icon': "url('src/assets/images/icon-images/highlight-reading-list-icon.png')",
        // Profile-icon
        'profile-icon': "url('src/assets/images/icon-images/normal-profile-icon.png')",
        'highlight-profile-icon': "url('src/assets/images/icon-images/highlight-profile-icon.png')",
        // Alert-icon
        'alert-icon': "url('src/assets/images/icon-images/normal-alert-icon.png')",
        'highlight-alert-icon': "url('src/assets/images/icon-images/highlight-alert-icon.png')",
        // Comment-icon
        'comment-icon': "url('src/assets/images/icon-images/normal-comment-icon.png')",
        'highlight-comment-icon': "url('src/assets/images/icon-images/highlight-comment-icon.png')",
        // Like-icon
        'like-icon': "url('src/assets/images/icon-images/normal-like-icon.png')",
        'highlight-like-icon': "url('src/assets/images/icon-images/highlight-like-icon.png')",
        // Search-icon
        'search-icon': "url('src/assets/images/icon-images/normal-search-icon.png')",
        'highlight-search-icon': "url('src/assets/images/icon-images/highlight-search-icon.png')",
        // Chat-icon
        'chat-icon': "url('src/assets/images/icon-images/normal-chat-icon.png')",
        'highlight-chat-icon': "url('src/assets/images/icon-images/highlight-chat-icon.png')"
      })
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
}
