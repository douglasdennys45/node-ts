import { Router } from 'express'

import { routeAdapter } from '@/infrastructure/adapters'
import { mountAddUserController } from '@/infrastructure/factories/interfaces'

export default (router: Router): void => {
  router.post('/users', routeAdapter(mountAddUserController()))
}
