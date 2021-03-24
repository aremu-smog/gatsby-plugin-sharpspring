/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = (_) => {
  console.log(`SharpSpring Loaded`);
};

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    trackingId: Joi.string().required().description("Tracking Id"),
    domainId: Joi.string().required().description("Domain Id"),
  });
};
