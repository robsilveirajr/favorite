import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { ProductBase } from '../components/products/productBase'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Produtos</title>
      </Head>
      <ProductBase
        imageUrl="https://dkdkf5wiwtstx.cloudfront.net/Custom/Content/Products/10/89/1089616_blusa-cropped-chenile-trama-100277816_m2_637822572985577933.jpg"
        listPrice={119}
        salePrice={119}
        name="blusão off-white"
      />
    </Container>
  )
}

export default Home
