import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

const episodeListStyle = StyleSheet.create({
  episodeList: {
    marginTop: 20,
    alignItems: 'center',
  },
  episode: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
    paddingVertical: 12,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 3,
    width: '100%',
  },
  episodeLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  }
})

export default episodeListStyle