import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const MoneyDisplayContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 87%;
  align-self: center;
  border-radius: 13px;
  margin-top: 10px;
  height: ${width * 0.35}px;
  background: ${({ theme }) => theme.colors.text};
`

export const MoneyValueText = styled.Text` 
  font-family: ${'fira-bold'};
  font-size: ${width * 0.08}px;
  color: ${({ theme }) => theme.colors.background};
`

export const MoneySubtitle = styled.Text` 
  font-family: ${'fira-bold'};
  font-size: ${width * 0.04}px;
  color: ${({ theme }) => theme.colors.background};
`
