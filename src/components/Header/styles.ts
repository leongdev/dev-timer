import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'
import * as Fonts from '../../themes/globalstyles/fonts'

const { width } = Layout.window

export const Container = styled.SafeAreaView`
  width: 90%; 
  align-items: flex-start;
  justify-content: flex-end;
  height: ${width * 0.2}px;
  align-self: center;
`

export const BottomLine = styled.View`
  height: 2px;
  width: 95%; 
  background: ${({ theme }) => theme.colors.gray300};
  position:absolute;
  bottom: 0px;
  align-self: center;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px; 
  ${Fonts.Title} 
`

export const HeaderSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
  margin-bottom: 5px;
  ${Fonts.Subtitle}
`

export const BackTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${width * 0.04}px;
  font-family: 'fira-medium';
  margin-left: 10px;
`

export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`

export const RightContainer = styled.View`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
`
