import { TypeError } from '@/domain/entities'
import { HttpResponse } from '@/interfaces/contracts'

export const created = (body: any): HttpResponse => ({
  statusCode: 201,
  body
})

export const badRequest = (error: TypeError): HttpResponse => ({
  statusCode: 400,
  error
})

export const internalServerError = (error: TypeError): HttpResponse => ({
  statusCode: 500,
  error
})
