module.exports = ({env}) => ({
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.gmail.com'),
            port: env('SMTP_PORT', 587),
            auth: {
              user: env('NODEMAILER_USER'),
              pass: env('NODEMAILER_PASS'),
            },
          },
          settings: {
            defaultFrom: 'no-reply@thaliatrandesign.com'
          },
        },
      },
});
