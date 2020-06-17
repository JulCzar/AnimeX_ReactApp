import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'

import getAnimeDetails from './utils/getAnimeDetails'

import styles from './styles'
import model from './model/animeDetails'

import AnimeInfo from './components/animeInfo'
import getEpisodeList from './utils/getEpisodeList'

const Details = () => {
  const [animeDetails, setAnimeDetails] = useState(model)
  const [episodeList, setEpisodeList] = useState([])

  const { params: { id }} = useRoute()
  const navigation = useNavigation()

  useEffect(() => {
    getAnimeDetails(id, setAnimeDetails)
  }, [])

  useEffect(() => {
    getEpisodeList(id, setEpisodeList)
  },[])

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
            &lt;- Voltar
          </Text>
        </RectButton>

        <AnimeInfo data={animeDetails}/>
        
        <View style={styles.episodeList}>
          {episodeList.map(({ id, label }) => {
            return (
              <View key={id} style={styles.episode}>
                <Text style={styles.episodeLabel}>{label}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Details