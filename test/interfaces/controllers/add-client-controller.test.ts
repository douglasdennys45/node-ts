import { faker } from '@faker-js/faker'
import { AddClientController } from '@/interfaces/controllers'

describe('AddClientController', () => {
  let sut: AddClientController
  let usecases: jest.Mock
  let payload: any
  let uuid: string

  beforeAll(() => {
    uuid = faker.datatype.uuid()
    payload = {
      name: faker.name.firstName(),
      type: faker.name.jobType()
    }
    usecases = jest.fn()
    usecases.mockResolvedValue({ value: uuid })
  })

  beforeEach(() => {
    sut = new AddClientController(usecases)
  })

  it('deve chamar o caso de uso com o payload correto', async () => {
    await sut.handle(payload)
    expect(usecases).toHaveBeenCalledWith(undefined)
    expect(usecases).toHaveBeenCalledTimes(1)
  })

  it('deve retornar sucesso quando todos parametros foram corretos', async () => {
    const httpResponse = await sut.handle(payload)
    expect(httpResponse.status).toEqual(201)
    expect(httpResponse.error).toBeFalsy()
  })

  it('deve retornar um error de validação quando os parametros forem incorretos', async () => {
    usecases.mockResolvedValueOnce({ error: { status: 400 } })
    const httpResponse = await sut.handle({})
    expect(httpResponse.status).toEqual(400)
    expect(httpResponse.value).toBeFalsy()
  })

  it('deve retornar uma exception caso aconteça algum erro interno no servidor', async () => {
    usecases.mockRejectedValueOnce(new Error('error_infra'))
    const httpResponse = await sut.handle(payload)
    expect(httpResponse).toEqual({
      status: 500,
      error: {
        code: 'SERVER_ERROR',
        detail: 'Server error',
        status: 500,
        title: 'Server Error'
      }
    })
  })
})
