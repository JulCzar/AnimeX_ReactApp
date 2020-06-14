import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import styles from '../Home/styles'
import AnimeCard from '../../components/animeCard'


import logo from '../../assets/logo.png'
import getReleases from './utils/getReleases'

const Releases = () => {
  const [releases, setReleases] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    getReleases(setReleases)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.animeScroller}
        showsVerticalScrollIndicator={false}
        style={styles.animesContainer}
        vertical
      >
        <View style={styles.logo} >
          <RectButton
            onPress={() => navigation.goBack()}
          >
            <Image source={logo}/>
          </RectButton>
        </View>
        {releases.map(anime => (
          <AnimeCard
            key={anime.id}
            data={anime}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Releases