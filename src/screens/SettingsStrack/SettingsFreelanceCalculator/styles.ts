import styled from 'styled-components/native'
import Fonts from '../../../themes/globalstyles/fonts'
import Layout from '../../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.View`
  flex: 1px;
`

export const LineSpace = styled.View`
  width: 100%;
  height: 20px;
`

export const TitleText = styled.Text`
  margin-left: ${width * 0.07}px;
  margin-bottom: 4px;
  ${Fonts.Label2}
`
