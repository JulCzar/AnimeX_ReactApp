import colors from '../../../theme/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: 15,
    width: '100%',
    height: 50,

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
    borderTopColor: '#ffffff58',
    borderTopWidth: 1,
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
    borderTopColor: '#ffffff58',
    paddingVertical: 10,
    textAlign: 'center',
    borderTopWidth: 1,
    color: 'white',
  }
})

export default styles