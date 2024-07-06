'use strict';

/**
 * coache service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coache.coache');
