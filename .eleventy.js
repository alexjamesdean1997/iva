module.exports = function (config) {
  // Needed to prevent eleventy from ignoring changes to `webpack.html`
  // since it is in the `.gitignore`
  config.setUseGitIgnore(false);

  // Pass-through files
  // config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/videos')
  config.addPassthroughCopy('src/assets/fonts')

  return {
    templateFormats: ['html'],
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    }
  }
}
