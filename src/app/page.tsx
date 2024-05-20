import { Table } from "@/components/Table";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const headers = ['id', 'nome', 'email', 'cpf']
  const rows = [{
    id: '1',
    nome: 'Christopher Estanislau',
    email: 'christopher.estanis@gmail.com',
    cpf: '46669666845'
  },
  {
    id: '2',
    nome: 'Christopher Estanislau',
    email: 'christopher.estanis@gmail.com',
    cpf: '46669666845'
  }]
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Tabela | devstore</title>
        <meta name="description" content="Uma página com uma tabela centralizada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold">Tabela</h1>
      <Table headers={headers} rows={rows}/>
    </div>
  );
}
