import { StyleSheet } from 'react-native'

import colors from '../../../theme/colors'
import image from './image'

const infosStyle = StyleSheet.create({
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
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    width: '80%',
    color: colors.title,
    fontWeight: 'bold',
    // textAlign: 'auto',
    fontSize: 22,
  },
  desc: {
    textAlign: 'justify',
    color: colors.accent
  },
  year: {
    width: '20%',
    fontSize: 10,
    textAlign: 'right',
    paddingRight: 4,
    color: `${colors.accent}a3`
  },
  status: {
    fontSize: 10,
    color: `${colors.accent}a3`
  }
})

export default infosStyle