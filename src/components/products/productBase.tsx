import React from 'react'

import { ProductFavorite } from './productFavorite'

export interface ProductBaseProps {
  id: number
  name: string
  listPrice: number
  salePrice: number
  imageUrl: string
}

export const ProductBase: React.FC<ProductBaseProps> = props => {
  return (
    <div className="product-base">
      <div className="product-base__image">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className="product-base__info">
        <h2 className="product-base__name">{props.name}</h2>
        <p className="product-base__price">
          <span className="product-base__list-price">{props.listPrice}</span>
          <span className="product-base__sale-price">{props.salePrice}</span>
        </p>
        <ProductFavorite id={props.id} isFavorite={false} />
      </div>
    </div>
  )
}
