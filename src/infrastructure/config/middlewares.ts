import { bodyParser, newCors } from '@/infrastructure/middlewares'

import { Express } from 'express'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(newCors)
}
