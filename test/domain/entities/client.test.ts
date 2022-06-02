import { Client } from '@/domain/entities'
import { faker } from '@faker-js/faker'

const mockClientRequest = () => ({
  name: faker.name.firstName(),
  document: [
    { type: faker.name.jobType(), number: faker.datatype.hexadecimal() }
  ],
  type: faker.name.jobType()
})

describe('Classe de Cliente', () => {
  test('Deve testar a criação de um novo cliente', () => {
    const payload = mockClientRequest()
    const client = new Client(payload)
    const newClient = client.create()
    expect(newClient).toBeTruthy()
    expect(newClient.value).toEqual(payload)
  })

  test('Deve retorna erro quando parametros forem requeridos', () => {
    const client = new Client({})
    const { value, error } = client.create()
    expect(error).toBeTruthy()
    expect(error).toEqual({
      code: 'FIELD_REQUIRED',
      detail: 'Name required, Type required',
      status: 400,
      title: 'Field required'
    })
    expect(value).toBeFalsy()
  })
})
