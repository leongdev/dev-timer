
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'

function SettingsTimer ({ navigation }: RootTabScreenProps<any>) {
  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Temporizador'
      />

    </SafeContainer>
  )
}

export default SettingsTimer
