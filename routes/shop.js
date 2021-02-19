// routes/shop.js
const Joi = require("joi")

const G_NAME = 'shop'

module.exports = [
  {
    method: 'GET',
    path: `/${ G_NAME }`,
    handler: async (request, reply) => {
      reply('/shop')
    },
    config: {
      tags: ['api', G_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(1).default(10)
            .description('每页的条目数'),
          page: Joi.number().integer().min(1).default(1)
            .description('页码数'),
        }
      }
    }
  },
  {
    method: 'GET',
    path: `/${G_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply()
    },
    config: {
      tags: ['api', G_NAME],
      description: '获取店铺的商品列表',
    },
  },
]
