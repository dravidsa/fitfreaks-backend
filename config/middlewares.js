module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'global::google-auth',  // Add this line
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['*']
    }
  },
];
