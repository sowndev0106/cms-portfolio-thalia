'use strict';

/**
 * gaming-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gaming-website.gaming-website');
