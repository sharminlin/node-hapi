require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')

const server = new Hapi.Server()
server.connection(config)

const init = async () => {
  server.route([
    ...routesHelloHapi
  ])

  await server.start()
  console.log(`Server running at: ${ server.info.uri }`)
}

init()
