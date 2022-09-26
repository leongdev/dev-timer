
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'

function SettingsProjects ({ navigation }: RootTabScreenProps<any>) {
  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Projetos'
      />

    </SafeContainer>
  )
}

export default SettingsProjects
