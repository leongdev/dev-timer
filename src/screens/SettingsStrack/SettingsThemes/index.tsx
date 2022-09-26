
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Button from '../../../components/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import useResponsive from '../../../hooks/useResponsive'
import * as S from './styles'

function SettingsThemes ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()
  const iconSize = useResponsive(0.5)

  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Tema Principal'
      />
      <S.LineSpace/>
      <Button
        title={'Dark'}
        icon={() => <MaterialCommunityIcons size={iconSize} color={colors.background} name={'moon-waning-crescent'} />}
      />
      <S.LineSpace/>
      <Button
        inverted
        title={'Light'}
        icon={() => <MaterialCommunityIcons size={iconSize} color={colors.text} name={'white-balance-sunny'} />}
      />

      <Header
        title='Cor Primária'
      />

    </SafeContainer>
  )
}

export default SettingsThemes
