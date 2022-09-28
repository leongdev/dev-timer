import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'
const { width } = Layout.window
export const Container = styled.View`
  flex: 1px;
`

export const LineSpace = styled.View`
  width: 100%;
  height: 20px;
`

export const ColorContainer = styled.View`
  flex: 1px;
  flex-direction: row;
  padding-left: ${width * 0.04}px;
`
