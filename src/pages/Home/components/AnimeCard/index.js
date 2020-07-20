import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { truncate } from '../../../../utils'
import {
  AnimeCardContainer,
  AnimeImage,
  AnimeName,
  AnimeNameContainer
} from './styles'

const AnimeCard = ({ data }) => {
  const { id, name, image } = data

  const navigation = useNavigation()

  const openDetails = id => {
    navigation.navigate('Details', { id })
  }
  
  return (
  <AnimeCardContainer>
    <RectButton
      key={id}
      style={{flex: 1}}
      onPress={() => openDetails(id)}
    >
      <AnimeImage source={image} />
      <AnimeNameContainer>
        <AnimeName>{truncate(name, 34)}</AnimeName>
      </AnimeNameContainer>
    </RectButton>
  </AnimeCardContainer>
  )
}

export default AnimeCard