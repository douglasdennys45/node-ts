import { TypeError } from '@/domain/entities'

export type HttpRequest = {
  body?: any
  query?: any
  params?: any
  headers?: any
}

export type HttpResponse = {
  statusCode: number
  body?: any
  error?: TypeError
}
