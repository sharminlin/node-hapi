require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routes = require('./routes')
const pluginsHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server()
server.connection(config)

const init = async () => {
  await server.register([
    ...pluginsHapiSwagger
  ])

  server.route(routes)

  await server.start()
  console.log(`Server running at: ${ server.info.uri }`)
}

init()
