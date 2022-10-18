import { app } from '@/infrastructure/config/app'

import request from 'supertest'

describe('Test CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req: any, res: any) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
  })
})
