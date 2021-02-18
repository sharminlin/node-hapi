const Joi = require("joi")

const G_NAME = 'orders'

module.exports = [
  {
    method: 'POST',
    path: `/${G_NAME}`,
    handler: async (request, reply) => {
      reply()
    },
    config: {
      tags: ['api', G_NAME],
      description: '创建订单',
      payload: {
        goodsList: Joi.array().items(
          Joi.object().keys({
            goods_id: Joi.number().integer(),
            count: Joi.number().integer(),
          })
        )
      }
    },
  },
  {
    method: 'POST',
    path: `/${G_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      reply()
    },
    config: {
      tags: ['api', G_NAME],
      description: '支付某条订单',
      validate: {
        params: {
          orderId: Joi.string().required()
        }
      },
    },
  },
]
