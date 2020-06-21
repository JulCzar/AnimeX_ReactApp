import { StyleSheet } from 'react-native'

import episodeListStyle from './episode'
import infosStyle from './animesInfos'

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 14
  },
  animeScroller: {
    paddingVertical: 20,
  },
  ...infosStyle,
  ...episodeListStyle
})

export default styles