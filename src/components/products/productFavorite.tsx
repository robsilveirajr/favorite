import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ProductFavoriteProps {
  id: number
  isFavorite: boolean
}
const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
`
const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
  color: ${props => (props.isFavorite ? '#00AE7C' : '#000')};
  font-size: 32px;
`

export const ProductFavorite: React.FC<ProductFavoriteProps> = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)

  const handleClick = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isFavorite = favorites.find(id => id === props.id)

    if (isFavorite) {
      const newFavorites = favorites.filter(id => id !== props.id)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setIsFavorite(false)
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, props.id])
      )
      setIsFavorite(true)
    }
  }, [props.id])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isFavorite = favorites.find(id => id === props.id)
    setIsFavorite(!!isFavorite)
  }, [props.id])

  return (
    <FavoriteButton onClick={handleClick} isFavorite={isFavorite}>
      <FavoriteIcon isFavorite={isFavorite}>♥</FavoriteIcon>
    </FavoriteButton>
  )
}
