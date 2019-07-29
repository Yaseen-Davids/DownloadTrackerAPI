// UPDATE THIS WITH .env
const
  host = "ec2-54-235-92-43.compute-1.amazonaws.com",
  username = 'xkidctbtiyklqn',
  password = '0a25c3c4a2f6f0b3509726d6b413096e4019a39506988199f5d793e13847e791',
  port = '5432',
  db = 'd3m7eoc8rili7g';

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