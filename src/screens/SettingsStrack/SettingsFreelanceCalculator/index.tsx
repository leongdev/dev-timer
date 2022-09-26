
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'

function SettingsFreelanceCalculator ({ navigation }: RootTabScreenProps<any>) {
  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Freelancer'
      />

    </SafeContainer>
  )
}

export default SettingsFreelanceCalculator
