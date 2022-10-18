export type TypeError = {
  code: string
  status: number
  title: string
  detail?: string
}

export type BaseUser = {
  name: string
  email: string
  password: string
}
