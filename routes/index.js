
const routesHelloHapi = require('./hello-hapi')
const routesShop = require('./shop')
const routesOrder = require('./order')

module.exports = [
  ...routesHelloHapi,
  ...routesShop,
  ...routesOrder
]
