import { HttpAbstract } from './HttpAbstract'

export class RepositoryAbstract {
  protected api: HttpAbstract

  constructor(api: HttpAbstract) {
    this.api = api
  }
}
