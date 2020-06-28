import React, { useState, useEffect } from 'react';
import { LoadingIndicator } from '../../../../styles';
import { AnimeCard } from '../../components';
import { getApiData } from '../../utils';
import colors from '../../../../theme/colors';
import { View, Image } from 'react-native';
import styles from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../../../components/SearchBar';

import logo from '../../../../assets/logo.png';

const AlphabeticList = () => {
  const [animes, setAnimes] = useState({ isLoading: true })

  useEffect(() => {
    getApiData(setAnimes)
  }, [])

  return (
    <ScrollView
      contentContainerStyle={styles.animeScroller}
      showsVerticalScrollIndicator={false}
      style={styles.animesContainer}
      // vertical
    >
      <View style={[styles.logo, styles.padding]} >
        <Image source={logo}/>
      </View>
      <SearchBar style={styles.padding}/>
      
      <View style={styles.animeList} >
        {animes.isLoading
          ?<View/>
          :animes.map(({ id, ...otherData }) => (
            <AnimeCard key={String(id)} data={{id,...otherData}}/>
          ))
        }
      </View>
      <LoadingIndicator size='large' color={colors.accent} />
    </ScrollView>
  )
}

export default AlphabeticList