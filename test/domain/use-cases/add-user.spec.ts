import { faker } from '@faker-js/faker'
import { mock, MockProxy } from 'jest-mock-extended'

import { AddUserRepo } from '@/domain/contracts'
import { BaseUser } from '@/domain/entities'
import { AddUser } from '@/domain/use-cases'

describe('Test Add User UseCases', () => {
  let uuid: string
  let request: BaseUser
  let repo: MockProxy<AddUserRepo>
  let sut: AddUser

  beforeEach(() => {
    uuid = faker.datatype.uuid()
    request = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric()
    }
    repo = mock()
    repo.create.mockResolvedValue(uuid)
    sut = new AddUser(repo)
  })

  it('should call AddUserRepo with correct input', async () => {
    await sut.perform(request)
    expect(repo.create).toHaveBeenCalledWith(request)
    expect(repo.create).toHaveBeenCalledTimes(1)
  })

  it('should call AddUserRepo and return a throw', async () => {
    repo.create.mockRejectedValueOnce(new Error())
    const promise = sut.perform(request)
    promise.catch(() => {
      expect(repo.create).toHaveBeenCalledWith(request)
      expect(repo.create).toHaveBeenCalledTimes(1)
    })
  })

  it('should rethrow if AddUserRepo throws', async () => {
    const error = new Error('upload_error')
    repo.create.mockRejectedValueOnce(error)
    const promise = sut.perform(request)
    await expect(promise).rejects.toThrow(error)
  })

  it('should return a success', async () => {
    const newUser = await sut.perform(request)
    expect(newUser).toEqual(uuid)
  })
})
