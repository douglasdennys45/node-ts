import { Express } from 'express'

import { bodyParser, newCors } from '@/infrastructure/middlewares'

export const setupMiddleware = (app: Express): void => {
  app.use(bodyParser)
  app.use(newCors)
}
