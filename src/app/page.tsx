'use client'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Table } from '@/components/Table/Table'
import { Wallet } from '@/interfaces/Wallet/Wallet'
import WalletRepository from '@/repository/WalletRepository'

export default function Home() {
  const [wallets, setWallets] = useState<Array<Wallet>>([])
  const [headers, setHeaders] = useState<Array<string>>([])

  const getWallets = async () => {
    try {
      const wallets = await WalletRepository.list()

      setWallets(wallets.wallets)
      setHeaders(wallets.headers)
      console.log(wallets)
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    console.log('test')
    void getWallets()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Tabela | devstore</title>
        <meta
          name="description"
          content="Uma página com uma tabela centralizada"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold">Tabela</h1>
      <Table headers={headers} rows={wallets} />
    </div>
  )
}
