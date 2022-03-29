import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ProductFavoriteProps {
  id: number
  isFavorite: boolean
  onFavoriteClicked: () => void
}
// FavoriteButton component that change button color to red when product id found on localStorage
const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background: ${props => (props.isFavorite ? 'red' : 'white')};
  color: ${props => (props.isFavorite ? 'white' : 'black')};
  border: 1px solid ${props => (props.isFavorite ? 'red' : 'black')};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${props => (props.isFavorite ? 'white' : 'red')};
    color: ${props => (props.isFavorite ? 'red' : 'white')};
  }
`

// Component that add favorite button to product
export const ProductFavorite: React.FC<ProductFavoriteProps> = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)
  const handleFavoriteClicked = useCallback(() => {
    setIsFavorite(!isFavorite)
    props.onFavoriteClicked()
  }, [isFavorite, props.onFavoriteClicked])
  return (
    <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClicked}>
      {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    </FavoriteButton>
  )
}
