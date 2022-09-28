import styled from 'styled-components/native'
import Fonts from '../../themes/globalstyles/fonts'
import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.TouchableOpacity`
  width: 75%;
  height: 50%; 
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

export const ProjectsListModalContainer = styled.View`
  border-radius: 13px;
  align-self: center;
  align-items: center;
  width: 90%;
  height: ${width * 0.9}px;
  background: ${({ theme }) => theme.colors.background};
`

export const ModalTitle = styled.Text`
  margin-left: 10px;
  width: 65%;
  margin-top: ${width * 0.03}px;
  margin-bottom:   ${width * 0.03}px;
  color: ${({ theme }) => theme.colors.text};
  ${Fonts.Title2} 
`

export const ProjectsList = styled.FlatList` 
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
`

export const Line = styled.View`
  border-width: 1px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray300};
`

export const LineSpace = styled.View`
  width: 100%;
  height: 10px;
`
