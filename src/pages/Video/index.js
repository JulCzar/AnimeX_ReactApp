import { useRoute } from '@react-navigation/native'
import { Video } from 'expo-av'
import styles from './styles'
import React from 'react'

const VideoPlayer = () => {
  const { params: { video } } = useRoute()
  
  return (
    <Video
      useNativeControls={true}
      style={styles.video}
      resizeMode='contain'
      source={video}
    />)
}

export default VideoPlayer