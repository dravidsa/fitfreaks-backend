module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.path.startsWith('/api/connect/google')) {
      const store = await strapi.store({ type: 'plugin', name: 'users-permissions' });
      const providers = await store.get({ key: 'grant' });
      
      console.log('Detailed Provider Config:', {
        ...providers.google,
        secret: providers.google.secret ? 'Present' : 'Missing',
      });

      // Log response headers
      await next();
      console.log('Response Headers:', ctx.response.headers);
      console.log('Response Status:', ctx.status);
    } else {
      await next();
    }
  };
};

