import React from 'react'
import styled from 'styled-components'
import colors from '../../theme/colors'

const config = {
  size: 'large',
  color: colors.accent
}

const Loader = () => <LoadingIndicator {...config} />

export const LoadingIndicator = styled.ActivityIndicator`
  width: 100%;
  height: 100%;
  flex: 1;
`

export default Loader