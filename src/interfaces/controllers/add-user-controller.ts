import { AddUser } from '@/domain/contracts'
import { BadRequest } from '@/domain/entities'
import { HttpRequest, HttpResponse } from '@/interfaces/contracts'
import { Controller } from '@/interfaces/controllers/controller'
import { badRequest, created, internalServerError } from '@/interfaces/presentations'

export class AddUserController implements Controller {
  constructor (private readonly useCases: AddUser) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const httpResponse = await this.useCases.perform(httpRequest.body)
      return created(httpResponse)
    } catch (error: any) {
      if (error instanceof BadRequest) {
        return badRequest(error.generate())
      }
      return internalServerError(error.generate())
    }
  }
}
