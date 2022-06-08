import { adaptRoute } from '@/infrastructure/api/adapters'
import { makeAddClientController } from '@/infrastructure/factories/interfaces/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/clients', adaptRoute(makeAddClientController()))
}
