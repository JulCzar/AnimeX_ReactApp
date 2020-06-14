import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Image, View, ScrollView } from 'react-native';

import styles from './styles'
import logo from '../../assets/logo.png'
import getApiData from './utils/getApiData';
import AnimeCard from '../../components/animeCard';

const Home = () => {
  const [animes, setAnimes] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    getApiData(setAnimes)
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
            onPress={() => navigation.navigate('Releases')}
          >
            <Image source={logo}/>
          </RectButton>
        </View>
        {animes.map(anime => (
          <AnimeCard
            key={anime.id}
            data={anime}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home