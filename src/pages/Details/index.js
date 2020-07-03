import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

import getAnimeDetails from './utils/getAnimeDetails'

import styles, { QualitiesContainer } from './styles'

import ReturnButton from '../../components/ReturnButton'
import getEpisodeList from './utils/getEpisodeList'
import AnimeInfo from './components/animeInfo'
import colors from '../../theme/colors'
import { getWatchedList, updateWatchedProgress } from './utils/getWatchedList'
import { LoadingIndicator } from '../../styles'
import EpisodeCard from './components/EpisodeCard'

const Details = () => {
  const [animeDetails, setAnimeDetails] = useState({ isLoading: true })
  const [episodeList, setEpisodeList] = useState({ isLoading: true })
  const [watchedList, setWatchedList] = useState([])

  const { params: { id }} = useRoute()
  const navigation = useNavigation()

  useEffect(() => {
    getAnimeDetails(id, setAnimeDetails)
  }, [])

  useEffect(() => {
    getEpisodeList(id, setEpisodeList)
  },[])

  useEffect(() => {
    getWatchedList(id, setWatchedList)
  }, [])
  
  const handleNavigateToVideo = async episodeId => {
    await updateWatchedProgress(id, episodeId, setWatchedList)
    navigation.navigate('VideoPlayer', { episodeId })
  }

  if (animeDetails.isLoading || episodeList.isLoading)
    return <LoadingIndicator size='large' color={colors.accent} />
  
  return (
    <>
      <View style={styles.screen} >
        <ScrollView
          contentContainerStyle={styles.animeScroller}
          showsVerticalScrollIndicator={false}
          style={styles.animesContainer}
        >
          <ReturnButton/>

          <AnimeInfo data={animeDetails}/>
          
          <View style={styles.episodeList}>
            {episodeList.isLoading
            ?<LoadingIndicator size='large' color={colors.accent} />
            :episodeList.map(({id, label}) => (
              <EpisodeCard
                key={id}
                data={{id, label}}
                watchedList={watchedList}
                onPress={() => handleNavigateToVideo(id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <QualitiesContainer>
        
      </QualitiesContainer>
    </>
  )
}

export default Details