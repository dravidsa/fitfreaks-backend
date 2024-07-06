module.exports = ({ env }) => ({
  // ...
    'export-csv': {
      enabled: true,
      resolve: './src/plugins/export-csv'
    },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: "smtp.zoho.in",
        port: "465",
        auth: {
          user: 'support@fitfreaks.in',
          pass: 'Cloud@6698',
        },
        pool: true,
        logger: true,
        debug: true,
        maxConnections: 10000,
        secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: 'support@fitfreaks.in',
        defaultReplyTo: 'support@fitfreaks.in',
      },
    },
  },
  // ...
});