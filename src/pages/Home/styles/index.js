import { StyleSheet } from 'react-native'
import searchBar from './searchbar'
import { vmin } from 'react-native-expo-viewport-units'
import colors from '../../../theme/colors'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20
  },
  animeScroller: {
    paddingTop: 40,
  },
  animesContainer: {
    flex: 1,
  },
  animeList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ...searchBar
})