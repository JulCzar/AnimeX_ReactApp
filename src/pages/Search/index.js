import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

import ReturnButton from '../../components/ReturnButton'

import getSearchResults from './utils/getSearchResults'

import styles from './styles'
import colors from '../../theme/colors'
import AnimeCard from './components/AnimeCard'

const SearchScreen = () => {
  const [results, setResults] = useState({isLoading: true})
  const { params: { search } } = useRoute()

  useEffect(() => {
    getSearchResults(search, setResults)
  },[])

  if (results.isLoading)
  return (
    <ActivityIndicator size='large' style={{flex: 1}} color={colors.accent} />
  )

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.animeScroller}
        showsVerticalScrollIndicator={false}
        style={styles.animesContainer}
      >
        <ReturnButton/>

        <Text>Pesquisa: {search}</Text>

        {results.list.map(({id, ...animeData}) => (
          <AnimeCard key={id} animeData={{id, ...animeData}} />
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchScreen