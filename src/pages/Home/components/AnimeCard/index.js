import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text } from 'react-native'

import truncate from '../../../../utils/truncate'
import styles from './styles'

const AnimeCard = ({ data }) => {
  const { id, name, image } = data

  const navigation = useNavigation()

  const openDetails = id => {
    navigation.navigate('Details', { id })
  }
  
  return (
  <View style={styles.anime}>
    <RectButton
      key={id}
      style={{flex: 1}}
      onPress={() => openDetails(id)}
    >
      <Image style={styles.image} source={image} />
      <View style={styles.nameContainer}>
        <Text style={styles.animeName}>
          { truncate(name, 34) }
        </Text>
      </View>
    </RectButton>
  </View>
  )
}

export default AnimeCard