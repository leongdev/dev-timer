
import { useTheme } from 'styled-components/native'
import { useDispatch } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Button from '../../../components/Button'
import { authenticateLogout } from '../../../store/action/auth'
import * as S from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../../hooks/useResponsive'

function AppSettings ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()

  const iconSize = useResponsive(0.8)
  const dispatch = useDispatch()

  return (
    <SafeContainer>
      <Header
        title='Settings'
      />
      <S.Container>
        <S.LineSpace/>
        <Button
          spaceBetween
          iconRight={() =>
            <MaterialCommunityIcons
              size={iconSize}
              color={colors.text}
              name={'chevron-right'}
            />
          }
          inverted
          title={'Projetos'}
          onPress={() => {
            navigation.navigate('Projects')
          }}
        />
        <S.LineSpace/>
        <Button
          spaceBetween
          iconRight={() =>
            <MaterialCommunityIcons
              size={iconSize}
              color={colors.text}
              name={'chevron-right'}
            />
          }
          inverted
          title={'Calculadora Freelancer'}
          onPress={() => {
            navigation.navigate('Freelancer')
          }}
        />
        <S.LineSpace/>
        <Button
          spaceBetween
          iconRight={() =>
            <MaterialCommunityIcons
              size={iconSize}
              color={colors.text}
              name={'chevron-right'}
            />
          }
          inverted
          title={'Temporizador'}
          onPress={() => {
            navigation.navigate('Timer')
          }}
        />
        <S.LineSpace/>
        <Button
          spaceBetween
          iconRight={() =>
            <MaterialCommunityIcons
              size={iconSize}
              color={colors.text}
              name={'chevron-right'}
            />
          }
          inverted
          title={'Temas'}
          onPress={() => {
            navigation.navigate('Themes')
          }}
        />
      </S.Container>
      <Button
        title={'Sair'}
        onPress={async () => {
          await dispatch(authenticateLogout)
        }}
      />
      <S.LineSpace/>
      <Button
        inverted
        title={'Deletar Conta'}
        onPress={async () => {
          await dispatch(authenticateLogout)
        }}
      />
      <S.LineSpace/>
    </SafeContainer>
  )
}

export default AppSettings
