'use strict';

/**
 * note router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::note.note', {
  config: {
    create: {
      middlewares: ['global::assign-owner'],
    },
    update: {
      policies: ['global::is-owner']
    },
    delete: {
      policies: ['global::is-owner']
    }
  }
});
