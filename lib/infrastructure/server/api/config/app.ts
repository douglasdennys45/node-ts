import restana from 'restana'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

const app = restana()

setupMiddlewares(app)
setupRoutes(app)

export default app
