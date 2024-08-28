module.exports = ({ env }) => ({
    upload: {
	enabled: true,
    },
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'jobquadrat@gmail.com',
        defaultReplyTo: 'jobquadrat@gmail.com',
      },
    },
  });
