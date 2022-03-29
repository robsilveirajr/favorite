import React from 'react'
import styled from 'styled-components'

import { ProductFavorite } from './ProductFavorite'

export interface ProductBaseProps {
  id: number
  name: string
  listPrice: number
  salePrice: number
  imageUrl: string
}

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  height: auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    object-fit: cover;
  }
`
const Price = styled.span`
  color: #000;
  font-size: 18px;
  text-decoration: line-through;
`
const SalePrice = styled.span`
  color: #00ae7c;
  font-size: 24px;
  font-weight: bold;
`
// Export ProductBase
export const ProductBase: React.FC<ProductBaseProps> = props => {
  return (
    <ProductCard>
      <img src={props.imageUrl} alt={props.name} />
      <h1>{props.name}</h1>
      <Price>{`R$ ${props.listPrice}`}</Price>
      <SalePrice>{`R$ ${props.salePrice}`}</SalePrice>
      <ProductFavorite id={props.id} isFavorite={false} />
    </ProductCard>
  )
}
