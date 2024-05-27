import { AxiosAdapter } from '@/adapters/AxiosAdapter'
import { TRANSACTION_URL } from '@/config/TransactionAPIConfig'

export const TransactionService = new AxiosAdapter(TRANSACTION_URL)
