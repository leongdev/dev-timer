import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'

const { width } = Layout.window

export const TimeContainer = styled.View`
  width: 100%;
  height: ${width * 0.6}px;
  align-items: center;
`

export const TimeItemContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 13px;
  margin-top: 10px;
  width: 90%;
  height: ${width * 0.15}px;
  background: ${({ theme }) => theme.colors.text};
`

export const TimeValueContainer = styled.View`
  border-radius: 13px;
  margin-right: 4px; 
  width: 40%;
  align-items: center;
  justify-content: center;
  height: 90%;
  background: ${({ theme }) => theme.colors.background};
`

export const TimeTitleText = styled.Text`
  margin-left: 15px; 
  font-family: ${'fira-medium'};
  font-size: ${width * 0.03}px;
  color: ${({ theme }) => theme.colors.background};
`

export const TimeValueText = styled.Text`
  font-family: ${'fira-medium'};
  font-size: ${width * 0.05}px;
  color: ${({ theme }) => theme.colors.text};
`

export const MoneyContainer = styled.View`
  width: 100%;
  height: ${width * 0.55}px;
`

export const MoneyDisplayContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
  border-radius: 13px;
  margin-top: 10px;
  height: ${width * 0.4}px;
  background: ${({ theme }) => theme.colors.text};
`
export const MoneyValueText = styled.Text`
  font-family: ${'fira-bold'};
  font-size: ${width * 0.08}px;
  color: ${({ theme }) => theme.colors.background};
`
