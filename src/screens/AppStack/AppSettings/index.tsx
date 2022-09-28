
import { useTheme } from 'styled-components/native'
import { useDispatch } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Button from '../../../components/Button'
import { authenticateDeleteAccount, authenticateLogout } from '../../../store/action/auth'
import * as S from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../../hooks/useResponsive'
import BaseModal from '../../../components/BaseModal'
import { useState } from 'react'

function AppSettings ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()
  const [isLogOutModalVisible, setLogOutModalVisible] = useState(false)
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)

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
        onPress={() => setLogOutModalVisible(true)}
      />
      <S.LineSpace/>
      <Button
        inverted
        title={'Deletar Conta'}
        onPress={() => setDeleteModalVisible(true)}
      />
      <S.LineSpace/>
      <BaseModal
        onPressBackdrop={() => setLogOutModalVisible(false)}
        isVisible={isLogOutModalVisible}
        content={{
          title: 'Sair do Aplicativo',
          description: 'Tem certeza que você deseja sair?',
          leftButtonTitle: 'Cancelar',
          rightButtonTitle: 'Sim',
          onPressLeft: async () => {
            await dispatch(authenticateLogout)
          },
          onPressRight: () => {
            setLogOutModalVisible(false)
          }
        }}
      />
      <BaseModal
        onPressBackdrop={() => setDeleteModalVisible(false)}
        isVisible={isDeleteModalVisible}
        content={{
          title: 'Deletar Conta',
          description: 'Tem certeza que você deseja deletar conta?',
          leftButtonTitle: 'Deletar',
          rightButtonTitle: 'Sim',
          onPressLeft: async () => {
            await dispatch(authenticateDeleteAccount)
          },
          onPressRight: () => {
            setDeleteModalVisible(false)
          }
        }}
      />
    </SafeContainer>
  )
}

export default AppSettings
