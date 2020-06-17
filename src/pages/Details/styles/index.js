import { StyleSheet } from 'react-native'

import colors from '../../../theme/colors'
import infosStyle from './animesInfos'
import episodeListStyle from './episode'

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 14
  },
  animeScroller: {
    paddingVertical: 20,
  },
  returnContainer: {
    marginBottom: 20,
    width: 96
  },
  returnButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent
  },
  ...infosStyle,
  ...episodeListStyle
})

export default styles