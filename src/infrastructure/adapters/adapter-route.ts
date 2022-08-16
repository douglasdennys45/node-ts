import { Controller } from '@/interfaces/controllers'
import { HttpRequest } from '@/interfaces/presentations'

import { RequestHandler } from 'express'

type Adapter = (controller: Controller) => RequestHandler

export const adaptRoute: Adapter = controller => async (req, res) => {
  const httpRequest: HttpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers
  }
  const { status, value, error } = await controller.handle(httpRequest)
  if (status < 400) {
    return res.status(status).json({ data: value })
  }
  return res.status(status).json({ error })
}
