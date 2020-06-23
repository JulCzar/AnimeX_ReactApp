import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome as Icon } from '@expo/vector-icons'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Navbar = ({style, callback}) => {
  const setScrenHome = () => {
    callback('Home')
  }
  const setScrenReleases = () => {
    callback('Releases')
  }

  return (
    <View style={style} >
      <TouchableOpacity onPress={setScrenHome}>
        <View style={styles.icon}>
          <Icon name="home" size={32} color='white' />
          <Text style={styles.label} >Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={setScrenReleases}>
        <View style={styles.icon}>
          <Icon name="rocket" size={32} color='white' />
          <Text style={styles.label} >Lançamentos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={[styles.icon, styles.disabled]}>
          <Icon name="bug" size={32} color='white' />
          <Text style={styles.label} >reportar Erros</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={[styles.icon, styles.disabled]}>
          <Icon name="cog" size={32} color='white' />
          <Text style={styles.label} >Configurações</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar