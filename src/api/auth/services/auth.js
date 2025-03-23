'use strict';

module.exports = {
    validateCallback(provider, query) {
        if (!query.access_token) {
            throw new Error('No access token provided');
        }
        if (!provider) {
            throw new Error('No provider specified');
        }
        return true;
    },

    async getUserProfile(provider, query) {
        const access_token = query.access_token;
        
        switch (provider) {
            case 'google':
                const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                return await response.json();
                
            case 'facebook':
                const fbResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`);
                return await fbResponse.json();
                
            default:
                throw new Error('Unknown provider');
        }
    }
};
