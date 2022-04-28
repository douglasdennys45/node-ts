export type HttpRequest = {
  params?: any
  query?: any
  body?: any
  headers?: any
}

export type HttpResponse = {
  error?: any
  value?: any
  status: number
}

export const response = (data: any, status: number): HttpResponse => {
  return { error: data?.error, value: data?.value, status }
}
