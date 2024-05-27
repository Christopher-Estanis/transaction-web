/* eslint-disable import/no-anonymous-default-export */
import { RepositoryAbstract } from '@/abstract/RepositoryAbstract'
import { WalletList } from '@/interfaces/Wallet/WalletList'
import { TransactionService } from '@/services/TransactionService'

class WalletRepository extends RepositoryAbstract {
  private readonly defaultPath = '/wallet'

  async list(): Promise<WalletList> {
    return await this.api.get(this.defaultPath)
  }
}

export default new WalletRepository(TransactionService)
