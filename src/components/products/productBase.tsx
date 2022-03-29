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
  // const retrieve products id and save it on localStorage as array
  const handleFavoriteClicked = () => {
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteIds') || '[]')
    const productId = props.id
    const isFavorite = favoriteIds.includes(productId)

    if (isFavorite) {
      const index = favoriteIds.indexOf(productId)
      favoriteIds.splice(index, 1)
    } else {
      favoriteIds.push(productId)
    }

    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
  }
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
        <ProductFavorite
          id={props.id}
          isFavorite={false}
          onFavoriteClicked={() => {
            handleFavoriteClicked()
          }}
        />
      </div>
    </div>
  )
}
