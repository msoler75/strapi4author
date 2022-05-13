'use strict';

/**
 * note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::note.note');
