import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { LoadingIndicator } from '../../../../styles';
import colors from '../../../../theme/colors';
import { AnimeCard } from '../../components';
import { getReleases } from '../../utils';
import styles from '../../styles';
import { View } from 'react-native';

const ReleaseList = () => {
  const [releases, setReleases] = useState({isLoading: true})

  useEffect(() => {
    getReleases(setReleases)
  }, [])

  return (
    <ScrollView
      style={styles.animesContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.animeScroller}
    >
      <View style={styles.animeList} >
        {releases.isLoading
        ?<View/>
        :releases.map(({ id, ...otherData }) => (
          <AnimeCard key={String(id)} data={{id,...otherData}}/>
        ))}
      </View>
      {releases.isLoading
        ?<LoadingIndicator size='large' color={colors.accent} />
        :<View/>
      }
    </ScrollView>
  )
}

export default ReleaseList