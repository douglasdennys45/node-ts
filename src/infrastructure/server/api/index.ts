import './config/module-alias'

import { MongoConnection } from '@/infrastructure/database/mongodb'
import env from '@/infrastructure/server/api/config/env'

MongoConnection.connect(env.mongoUrl)
  .then(async () => {
    const { app } = await import('@/infrastructure/server/api/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  }).catch(err => console.error(err))
