import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

const episodeListStyle = StyleSheet.create({
  episodeList: {
    marginTop: 20,
    alignItems: 'center',
  },
  episode: {
    overflow: 'hidden',
    borderColor: colors.accent,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 3,
    width: '100%',
  },
  episodeLabel: {
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.accent,
    fontSize: 16,
  }
})

export default episodeListStyle