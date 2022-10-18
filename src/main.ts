import 'dotenv/config'
import './infrastructure/config/module-alias'

import env from '@/infrastructure/config/env'
import { MongoConnection } from '@/infrastructure/database'

MongoConnection.connect(env.MONGO_URL)
  .then(async () => {
    const { app } = await import('@/infrastructure/config/app')
    app.listen(env.APP_PORT, () => console.log(`Server running at http://localhost:${env.APP_PORT}`))
  })
