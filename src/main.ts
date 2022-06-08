import './config/module-alias'

import { MongoConnection } from '@/infrastructure/database'
import env from '@/infrastructure/api/config/env'

MongoConnection.connect(env.mongoUrl)
  .then(async () => {
    const { app } = await import('@/infrastructure/api/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  }).catch(err => console.error(err))
