import styled from 'styled-components'
import colors from '../../../../theme/colors'

export const Episode = styled.View`
  border-radius: 20px;
  border: 3px solid ${colors.accent};
  margin: 5px 0px;
  overflow: hidden;
  width: 100%;
`
export const EpisodeSeen = styled.View`
  border-radius: 20px;
  border: 3px solid ${colors.primary};
  background-color: ${colors.accent};
  margin: 5px 0px;
  overflow: hidden;
  width: 100%;
`

export const EpisodeName = styled.Text`
  padding: 12px;
  text-align: center;
  font-weight: bold;
  color: ${colors.accent};
  font-size: 16px;
`
export const EpisodeNameSeen = styled.Text`
  padding: 12px;
  text-align: center;
  font-weight: bold;
  color: #fffc;
  font-size: 16px;
`
