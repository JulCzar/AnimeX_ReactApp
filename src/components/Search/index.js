import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'

import { loadSuggests } from './utils'

import {
  SearchBar,
  SearchInput,
  SearchIcon,
  Container
} from './styles'
import { SuggestList } from './components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [suggests, setSuggests] = useState([])

  const [buttonAction, setButtonAction] = useState('search')

  const navigation = useNavigation()
  
  useEffect(() => {
    if (search) {
      setButtonAction('x')
      loadSuggests(search, setSuggests)
    }
    else {
      setButtonAction('search')
      setSuggests([])
    }
  },[search])
  
  const navigateToDetails = id => navigation.navigate('Details', { id })
  const handleCloseSuggests = () => setSuggests([])
  const handleClearInput = () => {
    setSearch('')
    setSuggests([])
  }

  return (
    <Container >
      <SearchBar isFocused={suggests.length}>
        <SearchInput
          onBlur={handleClearInput}
          value={search}
          onChangeText={setSearch }
        />
        <SearchIcon>
          { (buttonAction !== 'search' || suggests.length)
              ? (<TouchableOpacity
                activeOpacity={0.5}
                onPress={handleCloseSuggests}
              >
                <Icon name='x' size={32} color='white' />
              </TouchableOpacity>)
              : (<TouchableOpacity activeOpacity={0.5} >
                <Icon name='search' size={32} color='white' />
              </TouchableOpacity>)
          }
        </SearchIcon>
      </SearchBar>
      <SuggestList
        items={suggests}
        loadDetail={navigateToDetails}
      />
    </Container>
  )
}

export default Search