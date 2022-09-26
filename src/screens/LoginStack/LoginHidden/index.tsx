
import { RootTabScreenProps } from '../../../../types'
import { useTheme } from 'styled-components/native'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import SafeContainer from '../../../components/SaveContainer'
import * as SVG from '../../../components/SvgImages'
import * as S from './styles'
import Input from '../../../components/Input'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticateWithEmailPassword } from '../../../store/action/auth'

function LoginHidden ({ navigation }: RootTabScreenProps) {
  const [loading, setLoading] = useState(false)

  const [login, setLogin] = useState('contato@leongdev.com3')
  const [password, setPassword] = useState('admin1233')

  const [loginError, setLoginError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useDispatch()
  const { colors } = useTheme()

  const onPressBack = () => {
    navigation.goBack(null)
  }

  const onValidateLogin = async () => {
    setLoading(true)

    if (login !== 'contato@leongdev.com') {
      setLoading(false)
      return setLoginError('Email errado')
    }

    if (password !== 'admin123') {
      setLoginError('')
      setLoading(false)
      return setPasswordError('Senha errada')
    }
    setLoginError('')
    setPasswordError('')
    await dispatch(authenticateWithEmailPassword)

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }

  return (
    <SafeContainer>
       <Header onPressBack={onPressBack} hasBack title='Admin' />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <S.AdminIconContainer>
            <SVG.IconAdmin colorA={colors.text} />
          </S.AdminIconContainer>
          <Input
            errorMessage={loginError}
            placeholder='Email'
            onChangedText={(text) => { setLogin(text) }}
          />
          <Input
            errorMessage={passwordError}
            placeholder='Senha'
            onChangedText={(text) => { setPassword(text) }}
            isPassword
          />
          <Button
            loading={loading}
            title='Entrar'
            onPress={onValidateLogin}
            loadingColor={colors.background}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeContainer>
  )
}

export default LoginHidden
