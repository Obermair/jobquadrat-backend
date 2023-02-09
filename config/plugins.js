module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'jobquadrat@gmail.com',
        defaultReplyTo: 'jobquadrat@gmail.com',
      },
    },
  });