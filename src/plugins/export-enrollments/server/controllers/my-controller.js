'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('export-enrollments')
      .service('myService')
      .getWelcomeMessage();
  },
});
