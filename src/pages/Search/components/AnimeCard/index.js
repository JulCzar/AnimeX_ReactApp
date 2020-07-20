import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import React from 'react'

import { truncate } from '../../../../utils'

import styles from './styles'

const AnimeCard = ({animeData}) => {
  const { id, name, desc, year, tags, image } = animeData

  const navigation = useNavigation()

  const handleNavigateDetails = () => {
    navigation.navigate('Details', { id })
  }

  return (
    <View>
      <RectButton
        style={styles.card}
        onPress={handleNavigateDetails}
      >
        <Image style={styles.image} source={image}/>
        <View style={styles.animeInfos} >
          <View>
            <Text style={styles.title} >{truncate(name, 35)}</Text>
            <Text style={styles.tags} >{truncate(tags.join(', '), 45)}</Text>
          </View>
          <Text style={styles.desc} >{truncate(desc, 170)}</Text>
        </View>
        <Text style={styles.year} >{year}</Text>
      </RectButton>
    </View>
  )
}

export default AnimeCard