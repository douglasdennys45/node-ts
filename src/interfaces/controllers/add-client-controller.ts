import { AddClient } from '@/domain/usecases'
import { HttpRequest, HttpResponse, response } from '@/interfaces/presentations'
import { Controller } from './controller'

export class AddClientController implements Controller {
  constructor (private readonly usecases: AddClient) {}

  async handle ({ body }: HttpRequest): Promise<HttpResponse> {
    try {
      const { error, value } = await this.usecases(body)
      if (error && !value) {
        return response({ error }, 400)
      }
      return response({ value }, 201)
    } catch (error) {
      return response({ error: { code: 'SERVER_ERROR', title: 'Server Error', status: 500, detail: 'Server error' } }, 500)
    }
  }
}
