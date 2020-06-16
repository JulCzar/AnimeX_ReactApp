import { StyleSheet } from 'react-native'

import colors from '../../../theme/colors'
import image from './image'

const infos = StyleSheet.create({
  ...image,
  aditional: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  tags: {
    fontSize: 10,
    color: `${colors.accent}a3`
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: colors.accent,
    fontWeight: 'bold',
    textAlign: 'auto',
    fontSize: 24,
  },
  desc: {
    textAlign: 'justify',
    color: colors.accent
  },
  year: {
    fontSize: 10,
    color: `${colors.accent}a3`
  },
  status: {
    fontSize: 10,
    color: `${colors.accent}a3`
  }
})

export default infos