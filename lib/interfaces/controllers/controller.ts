import { HttpRequest, HttpResponse } from '@/interfaces/presentations'

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
