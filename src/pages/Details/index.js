import React, { useEffect, useState } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import getAnimeDetails from './utils/getAnimeDetails'

import styles from './styles'
import model from './model/animeDetails'

import truncate from '../../utils/truncate'

const Details = () => {
  const [{name, image, tags, desc, year, status}, setAnimeDetails] = useState(model)

  const { params: { id }} = useRoute()

  const navigation = useNavigation()

  useEffect(() => {
    getAnimeDetails(id, setAnimeDetails)
  }, [])

  return (
    <View style={styles.screen} >
      <RectButton
        style={styles.returnContainer}
        onPress={navigation.goBack}
        activeOpacity={0}
      >
        <Text style={styles.returnButton}>
          &lt;- Voltar
        </Text>
      </RectButton>
      <View style={styles.animeDetails}>
        <ImageBackground
          source={image}
          blurRadius={.5}
          style={styles.imageContainer}
        >
          <View style={styles.halfBright}>
            <Image style={styles.image} source={image}/>
          </View>
        </ImageBackground>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.aditional}>
          <Text style={styles.tags}>{tags.join(', ')}</Text>
          <Text style={styles.year}>Ano: {year}</Text>
        </View>
        <Text style={styles.desc}>{'\t\t\t' + truncate(desc, 330)}</Text>
      </View>
    </View>
  )
}

export default Details