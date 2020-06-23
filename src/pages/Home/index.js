import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { addOrientationChangeListener } from 'expo-screen-orientation'

import logo from '../../assets/logo.png'

import styles from './styles'

import getApiData from './utils/getApiData'
import getReleases from './utils/getReleases'

import { AnimeCard, Navbar } from './components'
import SearchBar from '../../components/SearchBar'

const Home = () => {
  const [animes, setAnimes] = useState([])
  const [releases, setReleases] = useState([])
  
  const [screen, setScreen] = useState('Home')

  useEffect(() => {
    getApiData(setAnimes)
  }, [])

  useEffect(() => {
    getReleases(setReleases)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.animeScroller}
          showsVerticalScrollIndicator={false}
          style={styles.animesContainer}
          vertical
        >
          <View style={styles.logo} >
            <Image source={logo}/>
          </View>
          <SearchBar/>
          <View style={styles.animeList}>
            {(screen === 'Home' ? animes : releases)
              .map(({ id, ...otherData }) => (
                <AnimeCard key={String(id)} data={{id,...otherData}}/>
              ))
            }
          </View>
        </ScrollView>
      </View>
      <Navbar style={[styles.navbar, styles.navbarPortrait]} callback={setScreen} />
    </>
  );
}

export default Home