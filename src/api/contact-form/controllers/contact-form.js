// @ts-nocheck
"use strict";

/**
 * contact-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const axios = require("axios");

module.exports = createCoreController(
  "api::contact-form.contact-form",
  ({ strapi }) => ({
    async submit(ctx) {
      const body = ctx.request.body;

      // Verify reCAPTCHA
      const recaptchaResponse = body.googleCaptcha;
      const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET;
      try {
        const verificationResponse = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`
        );
        if (!verificationResponse.data.success) {
          return ctx.badRequest("reCAPTCHA verification failed");
        }
      } catch (error) {
        return ctx.badRequest("Error verifying reCAPTCHA");
      }

      // Proceed with form submission if reCAPTCHA is verified
      const entity = await strapi
        .service("api::contact-form.contact-form")
        .create({
          data: {
            publishedAt: new Date(),
            ...body,
          },
        });

      await strapi.plugins["email"].services.email.send({
        cc: process.env.MAIL_CC || "thaliatran161@gmail.com",
        to: body.email,
        from: "no-reply@thaliatrandesign.com",
        subject: `Successful contact form submission - ${body.subject}`,
        html: `
          <p>  Hi <b> ${body.email}</b>, </p>
          
          <p>  Thank you for your message. We will get back to you as soon as possible.</p>
          
          <p>  Here is a copy of your message: ${body.message}</p>

          <p>  Best regards,  <br> Thalia Tran Design </p>`,
      });

      return this.transformResponse(entity, {});
    },
  })
);
