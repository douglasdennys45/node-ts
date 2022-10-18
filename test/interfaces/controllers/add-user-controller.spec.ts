import { faker } from '@faker-js/faker'
import { mock, MockProxy } from 'jest-mock-extended'

import { AddUser } from '@/domain/contracts'
import { ErrorStrategyFactory } from '@/domain/entities'
import { HttpRequest } from '@/interfaces/contracts'
import { AddUserController } from '@/interfaces/controllers'
import { badRequest, created, internalServerError } from '@/interfaces/presentations'

describe('', () => {
  let uuid: string
  let httpRequest: HttpRequest
  let sut: AddUserController
  let useCases: MockProxy<AddUser>

  beforeEach(() => {
    uuid = faker.datatype.uuid()
    httpRequest = {
      body: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.random.alphaNumeric()
      }
    }
    useCases = mock()
    useCases.perform.mockResolvedValue(uuid)
    sut = new AddUserController(useCases)
  })

  it('should call AddUser with correct input', async () => {
    await sut.handle(httpRequest)
    expect(useCases.perform).toHaveBeenCalledWith(httpRequest.body)
    expect(useCases.perform).toHaveBeenCalledTimes(1)
  })

  it('should return 200 with valid data', async () => {
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(created(uuid))
  })

  it('should return 400 with invalid data', async () => {
    const errors = new ErrorStrategyFactory('error', 'BadRequest').builder()
    useCases.perform.mockRejectedValueOnce(errors)
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(errors.generate()))
  })

  it('should return 500 with exception', async () => {
    const errors = new ErrorStrategyFactory('error', 'as').builder()
    useCases.perform.mockRejectedValueOnce(errors)
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(internalServerError(errors.generate()))
  })
})
