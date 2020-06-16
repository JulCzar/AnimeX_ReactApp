const { StyleSheet } = require("react-native");

import colors from '../../../theme/colors'

const image = StyleSheet.create({
  imageContainer: {
    borderColor: colors.primary,
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 5,
    width: '100%',
    height: 255,
  },
  halfBright: {
    backgroundColor: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    borderColor: colors.accent,
    borderRadius: 20,
    borderWidth: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    height: 240,
    width: 163,
  }
})

export default image