import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import {  } from 'react-native-gesture-handler'
import { default as Select } from 'react-native-picker-select'

import getAnimeDetails from './utils/getAnimeDetails'

import { ModalView, ModalBox, OpenVideo } from './styles'

import ReturnButton from '../../components/ReturnButton'
import getEpisodeList from './utils/getEpisodeList'
import { AnimeInfos } from './components'
import { getWatchedList, updateWatchedProgress } from './utils/getWatchedList'
import getQualities from './utils/getQualities'
import { LoadingIndicator } from '../../components'
import EpisodeCard from './components/EpisodeCard'
import { Container } from './style'
import { Modal, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

const Details = () => {
  const [animeDetails, setAnimeDetails] = useState({isLoading: true})
  const [episodeList, setEpisodeList] = useState([])
  const [watchedList, setWatchedList] = useState([])
  const [qualities, setQualities] = useState(false)
  const [episode, setEpisode] = useState(null)
  const [videoId, setVideo] = useState(false)
  const navigation = useNavigation()

  const { params: { id } } = useRoute()

  useEffect(() => {
    getEpisodeList(id, setEpisodeList)
    getWatchedList(id, setWatchedList)
    getAnimeDetails(id, setAnimeDetails)
  }, [])
  
  const handleShowModal = async episodeId => {
    setQualities([])
    setEpisode(episodeId)
    getQualities(episodeId, setQualities)
  }

  const openVideo = async () => {
    const { video } = qualities.filter(({ value }) => value === videoId)[0]
    await updateWatchedProgress(id, episode, setWatchedList)
    navigation.navigate('VideoPlayer', { video })
    setQualities(false)
  }

  if (animeDetails.isLoading)
    return <LoadingIndicator/>

  const flatListOptions = {
    ListHeaderComponent: () => (
      <>
        <ReturnButton/>
        <AnimeInfos data={animeDetails}/>
      </>
    ),
    renderItem: ({item }) => (
      <EpisodeCard
        data={item}
        watchedList={watchedList}
        onPress={() => handleShowModal(item.id)}
      />
    ),
    keyExtractor: data => String(data.id),
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingVertical: 20
    }
  }
  return (
    <Container>
      <FlatList
        data={episodeList}
        ListEmptyComponent={LoadingIndicator}
        {...flatListOptions}
      />
      <Modal
        animationType='slide'
        transparent
        visible={typeof qualities === 'object'}
      >
        {!qualities.length
        ?<LoadingIndicator/>
        :<TouchableWithoutFeedback onPress={() => setQualities(false)}>
          <ModalView >
            <TouchableWithoutFeedback onPress={evt => evt.stopPropagation()}>
              <ModalBox>
                <Select
                  onValueChange={val => setVideo(val)}
                  placeholder={{label: 'Escolha a qualidade', value: null}}
                  value={videoId}
                  items={qualities}
                />
                <TouchableOpacity onPress={openVideo}>
                  {episode && <OpenVideo>Abrir Video</OpenVideo>}
                </TouchableOpacity>
              </ModalBox>
            </TouchableWithoutFeedback>
          </ModalView>
        </TouchableWithoutFeedback>}
      </Modal>
    </Container>
  )
}

export default Details