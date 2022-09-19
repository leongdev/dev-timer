
import { useTheme } from 'styled-components/native'
import { useDispatch } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'

function AppNoises ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()

  const dispatch = useDispatch()

  return (
    <SafeContainer

    >
      <Header
        title='Sons'
      />
    </SafeContainer>
  )
}

export default AppNoises
