import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
`

export const AnimeList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default StyleSheet.create({
  animeScroller: {
    paddingTop: 40,
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