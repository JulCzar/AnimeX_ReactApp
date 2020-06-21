import { StyleSheet } from 'react-native'
import { vmin } from 'react-native-expo-viewport-units'

import colors from '../../../../../theme/colors'

const styles = StyleSheet.create({
  anime: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
    alignItems: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 15,
    borderWidth: 5,
    width: vmin(42),
    height: vmin(66)
  },
  image: {
    width: vmin(42),
    height: vmin(52),
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animeName: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  }
})

export default styles