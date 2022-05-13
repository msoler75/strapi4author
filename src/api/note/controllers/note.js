'use strict';

/**
 *  note controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::note.note',
({
  strapi
}) => ({
  async find(ctx) {
    const {
      filters
    } = ctx.query
    ctx.query = {
      ...ctx.query,
      filters: {
        ...filters,
        author: {
          id: ctx.state.user.id
        }
      }
    }
    return await super.find(ctx);
  },

  async create(ctx) {
   console.log('creating!')
    return await super.create(ctx);
  }
}));
