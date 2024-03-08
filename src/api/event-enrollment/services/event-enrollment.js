'use strict';

/**
 * event-enrollment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-enrollment.event-enrollment');
