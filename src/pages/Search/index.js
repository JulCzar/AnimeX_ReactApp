import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Text } from 'react-native'

const SearchScreen = () => {
  const { params: { search } } = useRoute()

  return <Text>{search}</Text>
}

export default SearchScreen