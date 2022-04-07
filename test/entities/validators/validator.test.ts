import { Validator } from '@/entities/validators'

describe('Classe de Validator', () => {
  test('deve testar a instancia da classe', () => {
    const payload = '0'
    const error = new Validator(payload)
    expect(error).toBeTruthy()
  })

  test('deve testar o retorno do metodo com parametros corretos do tipo string', () => {
    const payload = '10'
    const validator = new Validator(payload)
    const result = validator.isString()
    expect(result).toBeTruthy()
  })

  test('deve testar o retorno do metodo com parametros corretos do tipo numero', () => {
    const payload = 10
    const validator = new Validator(payload)
    const result = validator.isNumber()
    expect(result).toBeTruthy()
  })
})
