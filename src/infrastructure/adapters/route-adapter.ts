import { Request, Response } from 'express'

import { HttpRequest } from '@/interfaces/contracts'
import { Controller } from '@/interfaces/controllers'

export const routeAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode > 299) {
      return res.json({ error: httpResponse.error }).status(httpResponse.statusCode)
    } else {
      return res.json({ body: httpResponse.body }).status(httpResponse.statusCode)
    }
  }
}
