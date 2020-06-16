import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import AnimeCard from './components/animeCard';

import styles from './styles'
import logo from '../../assets/logo.png'

import getApiData from './utils/getApiData'
import getReleases from './utils/getReleases'

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
        {screen[0] === 'Home'
          ?animes.map(({ id, name, image }) => <AnimeCard key={id} data={{id,name,image}}/>)
          :releases.map(({ id, name, image }) => <AnimeCard key={id} data={{id,name,image}}/>)
        }
      </ScrollView>
    </View>
  );
}

export default Home