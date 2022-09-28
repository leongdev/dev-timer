import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'
import Fonts from '../../themes/globalstyles/fonts'

const { width } = Layout.window

export const Container = styled.View`
  width: 80%;
  border-radius: 13px;
  align-self: center;
  background: ${({ theme }) => theme.colors.background};
`

export const ModalTitle = styled.Text`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  ${Fonts.Title2}
`

export const Line = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray300};
`

export const LineSpace = styled.View`
  width: 100%;
  height: ${width * 0.06}px;
`

export const ModalDescription = styled.Text`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.text};
  ${Fonts.Label1}
`

export const ModalBottom = styled.View`

`
