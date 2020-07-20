import { TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components';
import colors from '../../theme/colors';

const searchBarWidth = '50px'

export const Container = styled.View`
  margin: 50px 5px;
`

export const SearchContainer = styled.View`
  background: black;
  margin: 55px 0px;
  z-index: 10;
`

const getBorderRadius = props => props.isFocused?'0px':'15px'
export const SearchBar = styled.View`
  background: ${colors.accent};
  border-radius: 15px;
  border-bottom-left-radius: ${getBorderRadius};
  border-bottom-right-radius: ${getBorderRadius};
  height: ${searchBarWidth};
  justify-content: center;
  width: 100%;
`

export const SearchInput = styled(TextInput)`
  color: #fff;
  font-size: 24px;
  margin-right: ${searchBarWidth};
  padding-left: 15px;
  width: 100%;
`

export const SearchIcon = styled.View`
  align-items: center;
  background: ${colors.primary};
  border-radius: 15px;
  height: ${searchBarWidth};
  justify-content: center;
  position: absolute;
  right: 0;
  width: ${searchBarWidth};
`