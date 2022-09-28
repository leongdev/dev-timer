import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.View`
  flex:1;
`

export const ProjectsContainer = styled.View`
  height: 100%;
  width: 90%;
  align-self: center;
  margin-top: 10px;
`

export const ProjectList = styled.FlatList` 
  flex: 1;
`

export const BottomContainer = styled.ScrollView`
  position: absolute;
  bottom: ${({ isKeyboardVisible }) => isKeyboardVisible ? width * 0.5 : 0}px;
  width: 90%;
  height: ${width * 0.45}px;
  border-top-width: 2px;
  align-self: center;
  background: ${({ theme }) => theme.colors.background};
  border-top-color: ${({ theme }) => theme.colors.gray300};
`

export const LineSpace = styled.View`
  width: 100%;
  height: ${width * 0.05}px;
`
