import getVideoQualities from './utils';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Video } from 'expo-av';
import styles from './styles';

const VideoPlayer = () => {
  const { params: { episodeId } } = useRoute()
  const [video, setVideo] = useState({})

  useEffect(() => {
    getVideoQualities(episodeId, setVideo)
  },[])

  return (
    <Video
      useNativeControls={true}
      style={styles.video}
      resizeMode="contain"
      source={video}
      
    />)
}

export default VideoPlayer