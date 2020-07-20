import { StyleSheet } from 'react-native'
import colors from '../../../../theme/colors'

const infosStyle = StyleSheet.create({
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
    width: 163
  },
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