import { faker } from '@faker-js/faker'

import { badRequest, created } from '@/interfaces/presentations'

describe('Test Http Presentations', () => {
  it('should return an created', () => {
    const uuid = faker.datatype.uuid()
    const httpResponse = created(uuid)
    expect(httpResponse).toEqual({ statusCode: 201, body: uuid })
  })

  it('should return an InternalServerError', () => {
    const error = {
      code: 'BadRequest',
      status: 400,
      title: 'BadRequest',
      detail: 'BadRequest'
    }
    const httpResponse = badRequest(error)
    expect(httpResponse).toEqual({ statusCode: 400, error })
  })

  it('should return an badRequest', () => {
    const error = {
      code: 'BadRequest',
      status: 400,
      title: 'BadRequest',
      detail: 'BadRequest'
    }
    const httpResponse = badRequest(error)
    expect(httpResponse).toEqual({ statusCode: 400, error })
  })
})
