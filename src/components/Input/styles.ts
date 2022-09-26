import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

export const InputContainer = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.gray300} ; 
  width: ${(props) => props.isFullWidth ? '100%' : '87%'};
  height: ${Layout.window.width * 0.15}px;
  align-self: center;
  border-radius: 13px;
  margin-bottom: 20px;
`

export const InputField = styled.TextInput`
  flex:1
  width: 90%;
  align-self: center;
  color: ${({ theme }) => theme.colors.text};
`

export const ErrorTitle = styled.Text`
  color: red;
  width: 87%;
  height: ${Layout.window.width * 0.15}px;
  align-self: center;
  font-family: 'fira-bold';
  position: absolute;
  bottom: -${Layout.window.width * 0.15}px;
`
