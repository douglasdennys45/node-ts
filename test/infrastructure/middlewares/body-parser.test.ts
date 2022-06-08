import { app } from '@/infrastructure/api/config/app'

import faker from '@faker-js/faker'
import request from 'supertest'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    const name = faker.name.firstName()
    app.post('/test_body_parser', (req: any, res: any) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name })
      .expect({ name })
  })
})
