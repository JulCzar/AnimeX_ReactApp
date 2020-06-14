import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import colors from '../theme/colors'

const AnimeCard = ({ data, onPress }) => {
  const { name, image } = data
  
  return (
  <View style={styles.anime}>
    <Image style={styles.image} source={image} />
    <View style={styles.nameContainer}>
      <Text style={styles.animeName}>{name}</Text>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  anime: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
    alignItems: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 15,
    borderWidth: 5,
    width: '47.5%',
  },
  image: {
    height: 230,
    width: 175,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animeName: {
    paddingVertical: 5,
    color: 'white',
    textAlign: 'center',
  }
})

export default AnimeCard