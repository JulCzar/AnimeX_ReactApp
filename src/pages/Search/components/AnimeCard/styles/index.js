import { StyleSheet } from 'react-native'
import { vmin } from 'react-native-expo-viewport-units'
import colors from '../../../../../theme/colors'

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.accent,
    borderRadius: 15,
    marginVertical: 8
  },
  image: {
    borderColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: vmin(37),
    width: vmin(27),
    borderWidth: 4,
  },
  animeInfos: {
    paddingLeft: 10,
    width: '65%',
  },
  title: {
    color: 'white',
    marginTop: 15,
    fontSize: 16
  },
  tags: {
    fontSize: 10,
    marginLeft: 5,
    color: '#ffffff5d'
  },
  desc: {
    fontSize: 12,
    color: 'white',
    marginTop: 5
  },
  year: {
    position: 'absolute',
    color: 'white',
    bottom: 5,
    right: 10,
    fontSize: 8
  }
})

export default styles