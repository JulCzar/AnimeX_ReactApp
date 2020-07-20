import React from 'react'

import { AnimeCard } from '../../components'
import { LoadingIndicator } from '../../../../components'

export const flatlistConfig = {
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 40
  },
  style: {
    paddingHorizontal: 25
  },
  renderItem: ({item}) => <AnimeCard data={item} />,
  ListEmptyComponent: () => <LoadingIndicator/>,
  keyExtractor: data => String(data.id)
}

