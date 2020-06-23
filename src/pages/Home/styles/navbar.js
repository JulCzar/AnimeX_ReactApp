import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

const navBarSide = 65

export default StyleSheet.create({
  navbar: {
    backgroundColor: colors.accent,
    flexDirection: 'row',
  },
  navbarPortrait: {
    width: '100%',
    height: navBarSide,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navbarLandscape: {
    width: navBarSide,
    height: '100%'
  }
})