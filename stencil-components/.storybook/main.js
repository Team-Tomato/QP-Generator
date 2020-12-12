// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }

// .storybook/main.js
const fs = require('fs');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const WriteFilePlugin = require('write-file-webpack-plugin');

const OUTPUT_DIR = '../dist';
// Stencil names the project entry the same as the project
// Look for the file `dist/<your-project-name>.js` to find out what to insert here
const PROJECT_NAME = 'stencil-test';

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-essentials', "@storybook/addon-links"],
  // Custom webpack config to tell Storybook where to find the compiled files from Stencil
  async webpackFinal(config) {
    config.entry.push(path.join(__dirname, '../loader', 'index.js'));
    fs.readdirSync(path.join(__dirname, OUTPUT_DIR, 'collection/components')).map(file => {
      jsFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.js`);
      try {
        if (fs.existsSync(jsFilePath)) {
          config.entry.push(jsFilePath);
        }
      } catch (err) {
        console.error(err);
      }

      // Add CSS
      let cssFilePath = path.join(
        __dirname,
        OUTPUT_DIR,
        `collection/components/${file}/${file}.css`
      );
      try {
        if (fs.existsSync(cssFilePath)) {
          config.entry.push(cssFilePath);
        }
      } catch (err) {
        console.error(err);
      }
    });

    // Add all static files to Storybook
    // config.plugins.push(
    //   new CopyPlugin([
    //     {
    //       from: '**/*',
    //       to: './',
    //       context: 'dist',
    //     },
    //   ])
    // );

    // Write the files to disk and not to memory
    // config.plugins.push(new WriteFilePlugin());

    return config;
  },
};