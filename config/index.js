// server config
const { env } = process

module.exports = {
  host: env.host || '127.0.0.1',
  port: env.port || 3001
}
