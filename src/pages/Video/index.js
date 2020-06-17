import React, { useState, useEffect } from 'react'
import { Video } from 'expo-av';
import { useRoute } from '@react-navigation/native';
import getVideoQualities from './utils/getVideoQualities';
import styles from './styles';
// import { useRoute } from '@react-navigation/native';

const VideoPlayer = () => {
  const { params: { id } } = useRoute()

  const [video, setVideo] = useState({})

  useEffect(() => {
    getVideoQualities(id, setVideo)
  })

  return (
    <Video
      source={video}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="contain"
      useNativeControls
      style={styles.video}
    />)
}

export default VideoPlayer