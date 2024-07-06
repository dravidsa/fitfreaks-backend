'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('export-csv')
      .service('myService')
      .getWelcomeMessage();
  },
});
