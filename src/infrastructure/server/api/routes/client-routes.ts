import { adaptRoute } from '@/infrastructure/server/api/adapters'
import { makeAddClientController } from '@/infrastructure/server/api/factories/interfaces/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/clients', adaptRoute(makeAddClientController()))
}
