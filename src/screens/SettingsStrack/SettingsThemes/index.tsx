
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'

function SettingsThemes ({ navigation }: RootTabScreenProps<any>) {
  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Tema Principal'
      />

    </SafeContainer>
  )
}

export default SettingsThemes
