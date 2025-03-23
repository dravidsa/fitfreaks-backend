'use strict';

module.exports = {
    async callback(ctx) {
        const provider = ctx.params.provider;
        const access_token = ctx.query.access_token;

        try {
            // Get profile from provider
            const profile = await strapi
                .plugin('users-permissions')
                .service('providers')
                .getProfile(provider, ctx.query);

            // Check if user exists
            let user = await strapi
                .query('plugin::users-permissions.user')
                .findOne({
                    where: { email: profile.email }
                });

            // If user doesn't exist, create one
            if (!user) {
                user = await strapi
                    .query('plugin::users-permissions.user')
                    .create({
                        data: {
                            username: profile.email,
                            email: profile.email,
                            provider: provider,
                            confirmed: true,
                            blocked: false,
                            // Add any additional fields you need
                            firstName: profile.given_name,
                            lastName: profile.family_name,
                            profilePicture: profile.picture
                        }
                    });
            }

            // Generate JWT token
            const jwt = strapi.plugin('users-permissions').service('jwt').issue({
                id: user.id,
            });

            // Get the callback URL from the request
            const callbackUrl = ctx.query.callback || '/';

            // Redirect to frontend with token
            ctx.redirect(`${callbackUrl}?access_token=${jwt}&provider=${provider}`);

        } catch (error) {
            ctx.redirect(`${ctx.query.callback}?error=${error.message}`);
        }
    },

    async connect(ctx) {
        const provider = ctx.params.provider;
        const callbackUrl = ctx.query.callback;

        try {
            // Generate provider auth URL
            const connect = await strapi
                .plugin('users-permissions')
                .service('providers')
                .connect(provider, ctx.query);

            // Store callback URL in session if needed
            ctx.session.callbackUrl = callbackUrl;

            // Redirect to provider's auth page
            ctx.redirect(connect);
        } catch (error) {
            ctx.redirect(`${callbackUrl}?error=${error.message}`);
        }
    }
};
