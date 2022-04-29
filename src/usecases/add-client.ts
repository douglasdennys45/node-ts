import { Client } from '@/entities'
import { AddClientRepository } from '@/ports'
import { Error } from './types'

type Setup = (repo: AddClientRepository) => AddClient
type Input = any
type Output = {
  error?: Error,
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
