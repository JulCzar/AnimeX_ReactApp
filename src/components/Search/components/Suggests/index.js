import React from 'react'
import { Container, ShowDetailedSearch } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import HighlightMatch from './HighlightMatch'

const Suggests = ({ items, loadDetail, search }) => {
  const navigation = useNavigation()

  const showAllResults = () => { navigation.navigate('SearchScreen', { search }) }
  
  return (
    <Container>
      {items.map(({id, label}) => (
        <TouchableOpacity
          key={String(id)}
          onPress={() => loadDetail(id)}
        >
          <HighlightMatch value={label}/>
        </TouchableOpacity>
      ))}
      {!!items.length && (
        <TouchableOpacity onPress={showAllResults} >
          <ShowDetailedSearch>Mostrar detalhes</ShowDetailedSearch>
        </TouchableOpacity>
      )}
    </Container>
  )
}

export default Suggests