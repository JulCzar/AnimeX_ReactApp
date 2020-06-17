import React, { useState, useEffect } from 'react'
import * as orientation from 'expo-screen-orientation'
import getVideoQualities from './utils/getVideoQualities';
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import styles from './styles';

const VideoPlayer = () => {
  const { params: { id } } = useRoute()
  const [video, setVideo] = useState({})

  useEffect(() => {
    getVideoQualities(id, setVideo)
  })


  const playVideo = () => {}

  return (
    <Video
      useNativeControls={true}
      style={styles.video}
      resizeMode="contain"
      source={video}
    />)
}

export default VideoPlayer