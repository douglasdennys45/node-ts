
import { routeAdapter } from '@/infrastructure/adapters'
import { Controller } from '@/interfaces/controllers'

import { getMockReq, getMockRes } from '@jest-mock/express'
import { NextFunction, Request, RequestHandler, Response } from 'express'
import { mock, MockProxy } from 'jest-mock-extended'

describe('ExpressRouter', () => {
  let req: Request
  let res: Response
  let next: NextFunction
  let controller: MockProxy<Controller>
  let sut: RequestHandler

  beforeAll(() => {
    req = getMockReq({ body: { anyBody: 'any_body' } })
    res = getMockRes().res
    next = getMockRes().next
    controller = mock()
    controller.handle.mockResolvedValue({
      statusCode: 200,
      body: { data: 'any_data' }
    })
  })

  beforeEach(() => {
    sut = routeAdapter(controller)
  })

  it('should call handle with correct request', async () => {
    await sut(req, res, next)
    expect(controller.handle).toHaveBeenCalledWith({ body: { anyBody: 'any_body' }, headers: {}, params: {}, query: {} })
    expect(controller.handle).toHaveBeenCalledTimes(1)
  })

  it('should call handle with empty request', async () => {
    const req = getMockReq()
    await sut(req, res, next)
    expect(controller.handle).toHaveBeenCalledWith({ body: {}, headers: {}, params: {}, query: {} })
    expect(controller.handle).toHaveBeenCalledTimes(1)
  })

  it('should respond with 200 and valid data', async () => {
    await sut(req, res, next)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ body: { data: 'any_data' } })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  it('should respond with 204 and empty data', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 204,
      body: null
    })
    await sut(req, res, next)
    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ body: null })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  it('should respond with 400 and valid error', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 400,
      error: {
        code: 'NotFound',
        status: 400,
        title: 'NotFound',
        detail: 'NotFound'
      }
    })
    await sut(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      error: {
        code: 'NotFound',
        status: 400,
        title: 'NotFound',
        detail: 'NotFound'
      }
    })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  it('should respond with 500 and valid error', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 500,
      error: {
        code: 'InternalServerError',
        status: 500,
        title: 'InternalServerError',
        detail: 'InternalServerError'
      }
    })
    await sut(req, res, next)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      error: {
        code: 'InternalServerError',
        status: 500,
        title: 'InternalServerError',
        detail: 'InternalServerError'
      }
    })
    expect(res.json).toHaveBeenCalledTimes(1)
  })
})
