import { HttpRequest } from '@/interfaces/gateways'
import { Controller } from '@/interfaces/controllers'

export const adaptRoute = (controller: Controller) => {
  return async (req: any, res: any) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }
    const { status, error, value } = await controller.handle(httpRequest)
    if (status > 299) {
      return res.send({ requestId: '', error }, status)
    }
    return res.send({ data: value, requestId: '' }, status)
  }
}
