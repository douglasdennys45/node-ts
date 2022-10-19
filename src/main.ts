import 'dotenv/config'
import './infrastructure/config/module-alias'

import env from '@/infrastructure/config/env'
import { MongoConnection } from '@/infrastructure/database/mongodb'

MongoConnection.connect(env.MONGO_URL)
  .then(async () => {
    console.log('ers')
    const { app } = await import('@/infrastructure/config/app')
    app.listen(env.APP_PORT, () => console.log(`Server running at http://localhost:${env.APP_PORT}`))
  })
  .catch((err) => {
    console.log(`error mongodb: ${err}`)
  })
