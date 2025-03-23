module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/connect/:provider',
            handler: 'auth.connect',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/connect/:provider/callback',
            handler: 'auth.callback',
            config: {
                auth: false,
            },
        },
    ],
};
