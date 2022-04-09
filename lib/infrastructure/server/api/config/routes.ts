import { readdirSync } from 'fs'

export default (app: any): void => {
  const router = app.newRouter()
  app.use('/v1', router)
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
