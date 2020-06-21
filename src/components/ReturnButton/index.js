import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { Text } from 'react-native'
import React from 'react'

import colors from '../../theme/colors'
import styles from './styles'

const ReturnButton = () => {
  const navigation = useNavigation()

  return (
    <RectButton
      style={styles.returnContainer}
      onPress={navigation.goBack}
    >
      <Text style={styles.returnButton}>
        <Text>
          <Icon
            color={colors.accent}
            name='arrow-left'
            size={24}
          />
        </Text>
        Voltar
      </Text>
    </RectButton>
  )
}

export default ReturnButton