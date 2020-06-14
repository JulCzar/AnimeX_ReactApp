import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
    flex: 1,
  },
  logo: {
    width: '100%',
  },
  animeScroller: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
  },
  animesContainer: {
    flex: 1,
  },
})