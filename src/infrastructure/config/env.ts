export default {
  MONGO_URL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/app',
  APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 8080
}
