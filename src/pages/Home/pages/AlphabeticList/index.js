import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Image } from 'react-native';
import colors from '../../../../theme/colors';
import logo from '../../../../assets/logo.png';
import SearchBar from '../../../../components/SearchBar';
import styles, { AnimeList } from '../../styles';
import { LoadingIndicator } from '../../../../styles';
import { AnimeCard } from '../../components';
import { getApiData } from '../../utils';
import { LogoContainer } from './styles';

const AlphabeticList = () => {
  const [animes, setAnimes] = useState({ isLoading: true })

  useEffect(() => {
    getApiData(setAnimes)
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LogoContainer>
        <Image source={logo}/>
      </LogoContainer>
      <SearchBar style={styles.padding}/>
      <AnimeList>
        {animes.isLoading
          ?<View/>
          :animes.map(({ id, ...otherData }) => (
            <AnimeCard key={String(id)} data={{id,...otherData}}/>
          ))
        }
      </AnimeList>
      <LoadingIndicator size='large' color={colors.accent} />
    </ScrollView>
  )
}

export default AlphabeticList