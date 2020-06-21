import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import AnimeCard from './components/AnimeCard';

import styles from './styles'
import logo from '../../assets/logo.png'

import getApiData from './utils/getApiData'
import getReleases from './utils/getReleases'
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [animes, setAnimes] = useState([])
  const [releases, setReleases] = useState([])
  
  const [screen, setScreen] = useState(['Home','Releases'])

  useEffect(() => {
    getApiData(setAnimes)
  }, [])

  useEffect(() => {
    getReleases(setReleases)
  }, [])

  const changeScreen = () => {
    setScreen([...screen].reverse())
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.animeScroller}
        showsVerticalScrollIndicator={false}
        style={styles.animesContainer}
        vertical
      >
        <View style={styles.logo} >
          <RectButton onPress={changeScreen}>
            <Image source={logo}/>
          </RectButton>
        </View>
        <SearchBar/>
        <View style={styles.animeList}>
          {( screen[0] === 'Home' ? animes : releases )
            .map(({ id, name, image }) => (
              <AnimeCard key={id} data={{id,name,image}}/>
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default Home