import { HttpRequest, HttpResponse } from '@/interfaces/contracts'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
