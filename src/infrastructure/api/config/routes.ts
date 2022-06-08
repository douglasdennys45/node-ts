import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  readdirSync(join(__dirname, '../../router'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      (await import(`../../router/${file}`)).default(router)
    })
  app.use('/v1', router)
}
