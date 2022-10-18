import { AddUser as IAddUser, AddUserRepo } from '@/domain/contracts'
import { User } from '@/domain/entities'

export class AddUser implements IAddUser {
  constructor (private readonly repo: AddUserRepo) {}

  async perform (request: IAddUser.Request): Promise<IAddUser.Response> {
    const user = new User(request)
    return await this.repo.create(user.create())
  }
}
