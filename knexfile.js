// UPDATE THIS WITH .env
const
  host = process.env.host,
  username = process.env.username,
  password = process.env.password,
  port = '5432',
  db = process.env.db;

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${username}:${password}@${host}:${port}/${db}?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds/production',
    },
  }
}