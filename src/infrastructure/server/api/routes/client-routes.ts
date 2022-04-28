import { adaptRoute } from '@/infrastructure/server/api/adapters'
import { makeAddClientController } from '@/infrastructure/server/api/factories/interfaces/controllers'

export default (router: any): void => {
  router.post('/clients', adaptRoute(makeAddClientController()))
}
