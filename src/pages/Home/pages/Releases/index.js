import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { LoadingIndicator } from '../../../../styles';
import colors from '../../../../theme/colors';
import { AnimeCard } from '../../components';
import { getReleases } from '../../utils';
import styles, { AnimeList } from '../../styles';
import { View } from 'react-native';

const ReleaseList = () => {
  const [releases, setReleases] = useState({isLoading: true})

  useEffect(() => {
    getReleases(setReleases)
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 40}}
    >
      <AnimeList>
        {!releases.isLoading && releases.map(({ id, ...otherData }) => (
          <AnimeCard key={String(id)} data={{id,...otherData}} />
        ))}
      </AnimeList>
      {releases.isLoading && (
        <LoadingIndicator size='large' color={colors.accent} />
      )}
    </ScrollView>
  )
}

export default ReleaseList