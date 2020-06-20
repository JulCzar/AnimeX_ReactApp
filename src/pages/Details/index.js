import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Text, View, ActivityIndicator } from 'react-native'

import getAnimeDetails from './utils/getAnimeDetails'

import styles from './styles'

import getEpisodeList from './utils/getEpisodeList'
import AnimeInfo from './components/animeInfo'
import colors from '../../theme/colors'

const Details = () => {
  const [animeDetails, setAnimeDetails] = useState({ isLoading: true })
  const [episodeList, setEpisodeList] = useState([{ isLoading: true }])

  const { params: { id }} = useRoute()
  const navigation = useNavigation()

  useEffect(() => {
    getAnimeDetails(id, setAnimeDetails)
  }, [])

  useEffect(() => {
    getEpisodeList(id, setEpisodeList)
  },[])

  if (animeDetails.isLoading || episodeList.isLoading)
    return (
      <ActivityIndicator
        size='large'
        style={{flex: 1}}
        color={colors.accent}
      />)
  
  return (
    <View style={styles.screen} >
      <ScrollView
        contentContainerStyle={styles.animeScroller}
        showsVerticalScrollIndicator={false}
        style={styles.animesContainer}
        vertical
      >
        <RectButton
          style={styles.returnContainer}
          onPress={navigation.goBack}
          activeOpacity={0}
        >
          <Text style={styles.returnButton}>
            <Text>
              <Icon name='arrow-left' size={24} color={colors.accent} />
            </Text>
            Voltar
          </Text>
        </RectButton>

        <AnimeInfo data={animeDetails}/>
        
        <View style={styles.episodeList}>
          {episodeList.map(({ id, label }) => {
            return (
              <View key={ id } style={[styles.episode]}>
                <RectButton
                  style={{width: '100%'}}
                  onPress={() => navigation.navigate('VideoPlayer', { id })}
                >
                  <Text style={styles.episodeLabel}>{label}</Text>
                </RectButton>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Details