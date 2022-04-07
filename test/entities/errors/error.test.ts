import { faker } from '@faker-js/faker'
import { Error } from '@/entities/errors'

const mockPayloadError = () => ({
  code: faker.name.jobType(),
  detail: faker.name.jobDescriptor(),
  status: faker.datatype.number(),
  title: faker.name.jobTitle()
})

describe('Classe de Error', () => {
  test('deve testar a instancia da classe', () => {
    const payload = mockPayloadError()
    const error = new Error(payload)
    expect(error).toBeTruthy()
  })

  test('deve testar o retorno do metodo com parametros corretos', () => {
    const payload = mockPayloadError()
    const error = new Error(payload)
    const result = error.generateError()
    expect(result).toBeTruthy()
    expect(result).toEqual(payload)
  })
})
