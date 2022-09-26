
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import * as S from './styles'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { KeyboardAvoidingView, Platform } from 'react-native'

function SettingsProjects ({ navigation }: RootTabScreenProps<any>) {
  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Projetos'
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <S.Container>
          <S.ProjectsContainer>

          </S.ProjectsContainer>
          <S.BottomContainer>
            <S.LineSpace/>
            <Input
              isFullWidth
              placeholder={'Nome do projeto'}
              onChangedText={() => {}}
            />
            <Button
              isFullWidth
              title={'Adicionar'}
            />
          </S.BottomContainer>
        </S.Container>
      </KeyboardAvoidingView>
    </SafeContainer>
  )
}

export default SettingsProjects
