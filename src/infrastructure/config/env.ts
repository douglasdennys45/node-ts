export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/app',
  port: process.env.APP_PORT || 5050,
  host: process.env.APP_HOST || 'http://localhost:5050'
}
