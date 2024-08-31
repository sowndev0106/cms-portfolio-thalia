// @ts-nocheck
"use strict";

/**
 * contact-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::contact-form.contact-form",
  ({ strapi }) => ({
    async submit(ctx) {
      const body = ctx.request.body;
      const entity = await strapi
        .service("api::contact-form.contact-form")
        .create({
          data: {
            publishedAt: new Date(),
            // @ts-ignore
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
