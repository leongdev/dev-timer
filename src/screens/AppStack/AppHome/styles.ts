import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'
import Fonts from '../../../themes/globalstyles/fonts'

export const AdminIconContainer = styled.SafeAreaView`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const QuoteContainer = styled.SafeAreaView`
  width: 87%;
  height: ${Layout.window.width * 0.35}px;
  background: ${({ theme }) => theme.colors.text};
  align-self: center;
  margin-top: 20px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
`

export const QuoteText = styled.Text`
  width: 87%;
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  ${Fonts.Title2}
`

export const OpenQuoteContainer = styled.View` 
  position: absolute;
  left: 15px;
  top: 15px;
`

export const CloseQuoteContainer = styled.View` 
  position: absolute;
  right: 15px;
  bottom: 15px;
`
