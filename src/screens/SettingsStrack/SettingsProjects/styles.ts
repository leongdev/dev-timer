import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.ScrollView`
  flex:1;
`

export const ProjectsContainer = styled.View`
  height: ${width * 0.89}px;
  width: 90%;
  align-self: center;
`

export const BottomContainer = styled.View`
  width: 90%;
  height: ${width * 0.45}px;
  border-top-width: 2px;
  align-self: center;
  border-top-color: ${({ theme }) => theme.colors.gray300};
`

export const LineSpace = styled.View`
  width: 100%;
  height: ${width * 0.05}px;
`
