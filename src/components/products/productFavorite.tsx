import React from 'react'

// component favoriteButton with boolean state
export interface ProductFavoriteProps {
  isFavorite: boolean
  onFavoriteClicked: () => void
}

export const ProductFavorite: React.FC<ProductFavoriteProps> = props => {
  return (
    <button className="product-favorite" onClick={props.onFavoriteClicked}>
      {props.isFavorite ? '★' : '☆'}
    </button>
  )
}
