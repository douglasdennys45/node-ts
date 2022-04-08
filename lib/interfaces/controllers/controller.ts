import { HttpRequest, HttpResponse } from '@/interfaces/gateways'

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
