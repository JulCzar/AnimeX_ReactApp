import styled from 'styled-components'
import colors from '../../../../theme/colors'

export const Container = styled.View`
  background-color: ${colors.accent};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;  
  z-index: 5;
`

export const Suggest = styled.Text`
  border: 1px solid transparent;
  border-top-color: #fff5;
  color: #fff8;
  font-size: 13px;
  padding: 10px 15px;
`

export const MatchResult = styled.Text`
  color: #fffc;
  font-weight: bold;
`

export const ShowDetailedSearch = styled.Text`
  color: #fff;
  border: 1px solid transparent;
  border-top-color: #fff5;
  padding: 10px 0px;
  text-align: center;
`