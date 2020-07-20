import React, { useState, useEffect } from 'react'

import { getReleases } from '../../utils'
import { FlatList } from 'react-native';
import { flatlistConfig } from '../common'
import { useOrientation } from '../../../../utils'

const ReleaseList = () => {
  const [releases, setReleases] = useState([])
  const orientation = useOrientation()

  useEffect(() => { getReleases(setReleases) }, [])

  return (
    <FlatList
      data={releases}
      numColumns={orientation === 'PORTRAIT' ? 2 : 4}
      key={orientation === 'PORTRAIT' ? 2 : 4}
      {...flatlistConfig}
    />
  )
}

export default ReleaseList