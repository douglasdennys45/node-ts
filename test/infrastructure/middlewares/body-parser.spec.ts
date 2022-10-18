import { faker } from '@faker-js/faker'
import request from 'supertest'

import { app } from '@/infrastructure/config/app'

describe('Test Body Parser Middleware', () => {
  let name: string

  beforeEach(() => {
    name = faker.name.fullName()
  })
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name })
      .expect({ name })
  })
})
