import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ProductFavoriteProps {
  id: number
  isFavorite: boolean
  onFavoriteClicked: () => void
}

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
export const ProductFavorite: React.FC<ProductFavoriteProps> = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)

  // Check if the product ID is in localStorage
  const isFavoriteID = (id: number): boolean => {
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteIds') || '[]')
    return favoriteIds.includes(id)
  }
  const handleFavoriteClicked = useCallback(() => {
    setIsFavorite(!isFavorite)
    props.onFavoriteClicked()
  }, [isFavorite, props.onFavoriteClicked])
  return (
    <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClicked}>
      {isFavoriteID ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    </FavoriteButton>
  )
}
