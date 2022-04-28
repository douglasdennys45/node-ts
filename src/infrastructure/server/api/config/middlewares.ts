import { bodyParser, newCors } from '@/infrastructure/server/api/middlewares'

export default (app: any): void => {
  app.use(bodyParser)
  app.use(newCors)
}
