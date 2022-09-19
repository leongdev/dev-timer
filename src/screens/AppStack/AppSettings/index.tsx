
import { useTheme } from 'styled-components/native'
import { useDispatch } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Button from '../../../components/Button'
import { authenticateLogout } from '../../../store/action/auth'

function AppSettings ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()

  const dispatch = useDispatch()

  return (
    <SafeContainer

    >
      <Header
        title='Settings'
      />

      <Button
        title={'Log Out'}
        onPress={async () => {
          await dispatch(authenticateLogout)
        }} />
    </SafeContainer>
  )
}

export default AppSettings
