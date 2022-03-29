import React, { useState, useCallback } from 'react'

export interface ProductFavoriteProps {
  isFavorite: boolean
  onFavoriteClicked: () => void
}
// Favorite button that saves favorite id on localStorage then alter state to show favorite icon and call onFavoriteClicked
export const ProductFavorite: React.FC<ProductFavoriteProps> = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)

  const handleFavoriteClicked = useCallback(() => {
    setIsFavorite(!isFavorite)
    props.onFavoriteClicked()
  }, [isFavorite, props.onFavoriteClicked])

  return (
    <button
      className={`product-favorite ${
        isFavorite ? 'product-favorite--active' : ''
      }`}
      onClick={handleFavoriteClicked}
    >
      <span className="product-favorite__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
    </button>
  )
}
