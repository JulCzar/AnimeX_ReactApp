import styled from 'styled-components'
import colors from '../../theme/colors'
import { vmin } from '../../theme/Dimensions'

export const ModalView = styled.View`
  align-items: center;
  background: #0004;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const ModalBox = styled.View`
  align-items: flex-end;
  background: #fefefe;
  border-radius: 10px;
  padding: 20px 10px;
  width: ${vmin(100) - 50}px;
`

export const OpenVideo = styled.Text`
  border: 2px solid ${colors.accent};
  border-radius: 10px;
  color: ${colors.accent};
  padding: 5px;
`