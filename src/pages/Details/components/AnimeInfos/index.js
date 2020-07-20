import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'

import styles from './styles'

import { truncate } from '../../../../utils'

const AnimeInfo = ({data}) => {
  const { name, image, tags, desc, year } = data
  
  return (
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
        <Text style={styles.year}>{year}</Text>
      </View>
      <View style={styles.aditional}>
        <Text style={styles.tags}>{tags.join(', ')}</Text>
      </View>
      <Text style={styles.desc}>{'\t\t' + truncate(desc, 330)}</Text>
    </View>
  )
}

export default AnimeInfo