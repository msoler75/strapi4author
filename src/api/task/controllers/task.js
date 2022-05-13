'use strict';

/**
 *  task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task',
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
  }
}));
