import React, { useState, useEffect } from 'react'
import { Image, FlatList } from 'react-native'
import styled from 'styled-components'

import { SearchBar } from '../../../../components'
import { useOrientation } from '../../../../utils'
import logo from '../../../../assets/logo.png'
import { flatlistConfig } from '../common'
import { getApiData } from '../../utils'
import { LoadingIndicator } from '../../../../components/LoadingIndicator'

const AlphabeticList = () => {
  const [isLoading, setLoadingStatus] = useState(false)
  const [animes, setAnimes] = useState([])
  const orientation = useOrientation()

  useEffect(() => { getApiData(setAnimes) }, [])

  const columns = orientation === 'PORTRAIT' ? 2 : 4
  return (
    <FlatList
      data={animes}
      numColumns={columns}
      key={columns}
      ListFooterComponent={isLoading && <LoadingIndicator />}
      ListHeaderComponent={
        <>
          <LogoContainer>
            <Image source={logo}/>
          </LogoContainer>
          <SearchBar />
        </>
      }
      {...flatlistConfig}
    />
  )
}

export const LogoContainer = styled.View`
  margin: 20px 0px;
`

export default AlphabeticList