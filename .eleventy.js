module.exports = function(eleventyConfig) {

  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy images from content directories
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/**/*.gif");
  eleventyConfig.addPassthroughCopy("src/**/*.ico");

  // Copy CNAME file for custom domain (if it exists)
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Watch CSS for changes (for live reload during development)
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },

    // Use Nunjucks for all files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    // Default template formats to process
    templateFormats: ["html", "njk", "md"]
  };
};
