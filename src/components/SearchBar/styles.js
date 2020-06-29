import colors from '../../theme/colors'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const SearchContainer = styled.View`
  margin: 55px 24px;
`

export const Suggest = styled.Text`
  border: 1px solid transparent;
  border-top-color: #fff5;
  padding: 10px 15px;
  color: #fff8;
  width: 100%;
  font-size: 13px;
`

export const MatchResult = styled.Text`
  color: #fffc;
  font-weight: bold;
`

export const ShowDetailedSearch = styled.Text`
  border: 1px solid transparent;
  border-top-color: #fff5;
  padding: 10px 0px;
  text-align: center;
  color: #fff;
`

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 55
  },
  searchBar: {
    backgroundColor: colors.accent,
    borderRadius: 15,
    justifyContent: 'center',
    height: 50,
    paddingLeft: 15,
    overflow: 'hidden',
    width: '100%',
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
    marginHorizontal: 24,
    position: 'absolute',
    position: 'absolute',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    zIndex: 1,
    top: 49,
  }
})

export default styles