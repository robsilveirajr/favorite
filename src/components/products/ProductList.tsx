import React from 'react'
import styled from 'styled-components'

import { ProductBase } from './ProductBase'

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ProductList: React.FC = () => {
  return (
    <ProductListContainer>
      <ProductBase
        imageUrl="https://dkdkf5wiwtstx.cloudfront.net/Custom/Content/Products/10/89/1089616_blusa-cropped-chenile-trama-100277816_m2_637822572985577933.jpg"
        listPrice={119}
        salePrice={68}
        name="blusão off-white"
        id={1}
      />
      <ProductBase
        imageUrl="https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/07/1007061_calca-jogger-ca-lippa-443110047_m70_637819138811696686.jpg"
        listPrice={159}
        salePrice={42}
        name="calça jogger cintura alta em sarja"
        id={2}
      />
      <ProductBase
        imageUrl="https://dkdkf5wiwtstx.cloudfront.net/Custom/Content/Products/10/85/1085353_calca-jeans-wideleg-cropped-ca-analu-100201707_m4_637794950956042294.jpg"
        listPrice={119}
        salePrice={89}
        name="calça jeans wide leg cropped"
        id={3}
      />
    </ProductListContainer>
  )
}
