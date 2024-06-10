import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Topo from '@/Componentes/Topo'
import Apresentacao from '@/Componentes/Apresentacao'
import Beneficios from '@/Componentes/Beneficios'
import Secao_depoimentos from '@/Componentes/Secao_depoimentos'
import CardDepoimento from '@/Componentes/CardDepoimento'
import Secao_informacoes from '@/Componentes/Secao_informacoes'
import Secao_localizacao from '@/Componentes/Secao_localizacao'
import Rodape from '@/Componentes/Rodape'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Consultório Odontológico</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topo/>
      <Apresentacao/>
      <Beneficios/>
      <Secao_depoimentos/>
      <Secao_informacoes/>
      <Secao_localizacao/>
      <Rodape/>
    </div>
  )
}
