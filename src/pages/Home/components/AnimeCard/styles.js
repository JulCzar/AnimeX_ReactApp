import styled from 'styled-components'
import colors from '../../../../theme/colors'
import { vmin } from '../../../../theme/Dimensions'

export const AnimeCardContainer = styled.View`
  align-items: center;
  background-color: ${colors.accent};
  border-radius: 15px;
  border: 5px solid ${colors.primary};
  height: ${vmin(66)}px;
  margin: 10px 4px;
  overflow: hidden;
  width: ${vmin(42)}px;
  z-index: 1;
`

export const AnimeImage = styled.Image`
  width: ${vmin(42)}px;
  height: ${vmin(52)}px;
`

export const AnimeNameContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const AnimeName = styled.Text`
  padding: 5px;
  color: white;
  text-align: center;
`