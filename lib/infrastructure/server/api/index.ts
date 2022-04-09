import './config/module-alias'
import env from '@/infrastructure/server/api/config/env'
import { MongoConnection } from '@/infrastructure/database/mongodb'

MongoConnection.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('@/infrastructure/server/api/config/app')).default
    await app.start(+env.port)
    console.log(`started server to host: ${env.host}`)
  }).catch(err => console.error(err))
