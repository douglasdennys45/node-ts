import { AddClientRepository } from '@/ports'
import { Client } from '@/entities'

type Setup = (repo: AddClientRepository) => AddClient
type Input = any
type Output = {
  error?: {
    code: string
    detail: string
    status: number
    title: string
  },
  value?: string
}
export type AddClient = (input: Input) => Promise<Output>

export const setupAddClient: Setup = (repo) => async input => {
  const client = new Client(input)
  const { error, value } = client.create()
  if (error && !value) {
    return { error }
  }
  const newClient = await repo.create(value as Input)
  return { value: newClient }
}
