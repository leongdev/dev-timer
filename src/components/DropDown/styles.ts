import styled from 'styled-components/native'
import Fonts from '../../themes/globalstyles/fonts'

export const Container = styled.TouchableOpacity`
  width: 60%;
  height: 40%; 
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.text}; 
  position: absolute;
  right: 5px;
  border-radius: 13px; 
`

export const RightIndicator = styled.View`
  width: 25%;
  height: 100%;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-left-width: 2px;
  align-items: center;
  justify-content: center;
`

export const DropTitle = styled.Text.attrs((props) => ({
  numberOfLines: 1
}))`
  margin-left: 10px;
  width: 65%;
  color: ${({ theme }) => theme.colors.background};
  ${Fonts.Label1}
`
