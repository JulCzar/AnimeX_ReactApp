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
    color: `${colors.subtitle}a3`
  },
  titleContainer: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    color: colors.title,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 22,
  },
  desc: {
    textAlign: 'justify',
    color: colors.text
  },
  year: {
    position: 'absolute',
    right: 0,
    fontSize: 10,
    paddingRight: 4,
    color: `${colors.text}a3`
  },
  status: {
    fontSize: 10,
    color: `${colors.accent}a3`
  }
})

export default infosStyle