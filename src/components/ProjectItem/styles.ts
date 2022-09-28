import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'
import Fonts from '../../themes/globalstyles/fonts'

const { width } = Layout.window

export const TrashButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${width * 0.15}px;
`

export const EditButton = styled.TouchableOpacity`
  padding-left: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  width: 100%;
  height: ${width * 0.15}px;
  background:${({ theme }) => theme.colors.background};
  border-width: 3px;
  border-radius: 13px;
  border-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`

export const Title = styled.Text`
  margin-left: 05px;
  color: ${({ theme }) => theme.colors.text};
  ${Fonts.Title2}
`

export const EditModalContainer = styled.View`
  width: 90%;
  padding-top: ${width * 0.07}px;

  background: ${({ theme }) => theme.colors.background};
  align-self: center;
  border-radius: 13px;
`

export const LineSpace = styled.View`
  width: 100%;
  height: ${width * 0.04}px;
`
