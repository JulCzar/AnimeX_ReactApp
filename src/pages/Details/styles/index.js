import { StyleSheet } from 'react-native'

import colors from '../../../theme/colors'
import infos from './animesInfos'

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingHorizontal: 14
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
  ...infos
})

export default styles