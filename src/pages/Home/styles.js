import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
  },
  animeScroller: {
    paddingTop: 40,
  },
  animesContainer: {
    flex: 1,
  },
  animeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  padding: {
    paddingHorizontal: 24,
  }
})