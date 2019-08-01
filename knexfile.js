// UPDATE THIS WITH .env
const
  host = "ec2-54-227-251-33.compute-1.amazonaws.com",
  username = 'zqutsdsciacgqq',
  password = '62ce983bdd7b2166f0992cdbd567479d7d237b7f4c36229f6a6f6e900c95ec33',
  port = '5432',
  db = 'd8dp6utdkv6cl9';

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