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
        id={1}
      />
      <ProductBase
        imageUrl="https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/07/1007061_calca-jogger-ca-lippa-443110047_m70_637819138811696686.jpg"
        listPrice={159}
        salePrice={119}
        name="calça jogger cintura alta em sarja"
        id={2}
      />
      <ProductBase
        imageUrl="https://dkdkf5wiwtstx.cloudfront.net/Custom/Content/Products/10/85/1085353_calca-jeans-wideleg-cropped-ca-analu-100201707_m4_637794950956042294.jpg"
        listPrice={119}
        salePrice={119}
        name="calça jeans wide leg cropped"
        id={3}
      />
    </Container>
  )
}

export default Home
