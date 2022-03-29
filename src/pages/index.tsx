import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { ProductListContainer } from '../components/Products/ProductList'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Produtos</title>
      </Head>
      <ProductListContainer />
    </Container>
  )
}

export default Home
