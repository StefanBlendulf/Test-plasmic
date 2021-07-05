
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['my7CKR4bP6b6FnkRCJWvan'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  