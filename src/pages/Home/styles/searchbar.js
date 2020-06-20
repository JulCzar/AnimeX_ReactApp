import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

const searchBar = StyleSheet.create({
  searchContainer: {
    marginVertical: 55
  },
  searchBar: {
    backgroundColor: colors.accent,
    paddingLeft: 15,
    width: '100%',
    height: 50,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  searchBarOnFocus: {
    backgroundColor: colors.accent,
    paddingLeft: 15,
    width: '100%',
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center'

  },
  searchIcon: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 15,
    height: 50,
    width: 50,
    right: 0,
  },
  searchInput: {
    width: '85%',
    color: 'white',
    fontSize: 24,
  },
  suggestList: {
    backgroundColor: colors.accent,
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    position: 'absolute',
    alignItems:'center',
    overflow: 'hidden',
    width: '100%',
    zIndex: 1,
    top: 49,
  },
  suggest: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#ffffff88',
    width: '100%',
    fontSize: 13
  },
  matchResult: {
    color: '#ffffffd8',
    fontWeight: 'bold'
  },
  showAllResults: {
    color: 'white',
    paddingVertical: 10,
    borderTopColor: 'white',
    borderTopWidth: 1
  }
})

export default searchBar