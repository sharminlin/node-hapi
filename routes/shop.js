// routes/shop.js
const Joi = require("joi")
const models = require('../models')
const { paginationDefine } = require('../utils/router-helper')
const G_NAME = 'shop'

module.exports = [
  {
    method: 'GET',
    path: `/${ G_NAME }`,
    handler: async (request, reply) => {
      const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
        attributes: {
          include: ['id', 'name', 'thumb_url']
        },
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      })
      reply({ results, totalCount })
    },
    config: {
      tags: ['api', G_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          ...paginationDefine
        }
      }
    }
  },
  {
    method: 'GET',
    path: `/${G_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      const { rows: results, count: totalCount } = await models.goods.findAndCountAll({
        where: {
          shop_id: request.params.shop_id
        },
        attributes: ['id', 'name'],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      reply({ results, totalCount })
    },
    config: {
      tags: ['api', G_NAME],
      description: '获取店铺的商品列表',
      validate: {
        query: {
          ...paginationDefine
        }
      }
    },
  },
]
