import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import loadSuggests from './utils/loadSuggests'

import styles from './styles'

const NO_SUGGESTS = {
  lenght: 0,
  results: []
}

const SearchBar = ({value = ''}) => {
  const [loading, setLoad] = useState(true)
  const [search, setSearch] = useState(value)
  const [suggests, setSuggests] = useState(NO_SUGGESTS)

  const [buttonAction, setButtonAction] = useState('search')

  const navigation = useNavigation()
  
  useEffect(() => {
    if(!loading) {
      if (search) {
        setButtonAction('x')
        loadSuggests(search, setSuggests)
      }
      else {
        setButtonAction('search')
        setSuggests(NO_SUGGESTS)
      }
    }
    else setLoad(false)
  },[search])

  const showAllResults = () => {
    if (search) navigation.navigate('SearchScreen', { search })
  }

  const handleClearInput = () => {
    setSearch('')
    setSuggests(NO_SUGGESTS)
  }

  const handleCloseSuggests = () => {
    setSuggests(NO_SUGGESTS)
  }
  return (
    <View style={styles.searchContainer} >
      <View style={
        suggests.length
          ?styles.searchBarOnFocus
          :styles.searchBar
        }
      >
        <TextInput
          onBlur={handleClearInput}
          value={search}
          onChangeText={setSearch }
          style={styles.searchInput}
        />
        <View style={styles.searchIcon} >
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
        </View>
      </View>
      <View style={styles.suggestList}>
        {suggests.results.map(({id, label: {prefix, sufix, match}}) => (
          <TouchableOpacity
            key={id}
            containerStyle={{width: '100%'}}
            onPress={() => navigation.navigate('Details', { id })}
          >
            <Text style={styles.suggest} >{prefix}<Text style={styles.matchResult}>{match}</Text>{sufix}</Text>
          </TouchableOpacity>
        ))}
        <View>
          {suggests.length > 12
          ?(
            <TouchableOpacity style={{width: '100%'}} onPress={showAllResults} >
              <Text style={styles.showAllResults} >
              Mostrar todos os {suggests.length} resultados
              </Text>
            </TouchableOpacity>
          )
          :<View/>}
        </View>
      </View>
    </View>)
}

export default SearchBar