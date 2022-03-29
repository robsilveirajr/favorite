import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ProductFavoriteProps {
  id: number
  isFavorite: boolean
}
const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background: ${props => (props.isFavorite ? '#ff0000' : '#fff')};
  color: ${props => (props.isFavorite ? '#fff' : '#000')};
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`
const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
  color: ${props => (props.isFavorite ? '#fff' : '#000')};
  font-size: 20px;
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
      <FavoriteIcon isFavorite={isFavorite}>&#9733;</FavoriteIcon>
    </FavoriteButton>
  )
}
