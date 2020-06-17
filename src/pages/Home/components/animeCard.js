import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text } from 'react-native'

import truncate from '../../../utils/truncate'

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

import { StyleSheet } from 'react-native'

import colors from '../../../theme/colors'

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
    padding: 5,
    color: 'white',
    textAlign: 'center',
  }
})

export default AnimeCard