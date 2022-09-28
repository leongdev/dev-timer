
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Button from '../../../components/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import useResponsive from '../../../hooks/useResponsive'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../../store/action/theme'
import ColorSelector from '../../../components/ColorSelector'

function SettingsThemes ({ navigation }: RootTabScreenProps<any>) {
  const { colors } = useTheme()
  const iconSize = useResponsive(0.5)
  const dispatch = useDispatch()

  const setMainTheme = (currentTheme: string) => {
    dispatch(setTheme(currentTheme))
  }

  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Tema Principal'
      />
      <S.LineSpace/>
      <Button
        onPress={() => setMainTheme('dark')}
        title={'Dark'}
        icon={() => <MaterialCommunityIcons size={iconSize} color={colors.background} name={'moon-waning-crescent'} />}
      />
      <S.LineSpace/>
      <Button
        onPress={() => setMainTheme('light')}
        inverted
        title={'Light'}
        icon={() => <MaterialCommunityIcons size={iconSize} color={colors.text} name={'white-balance-sunny'} />}
      />
      <Header
        title='Cor Primária'
      />

      <S.ColorContainer>
        <ColorSelector color={'#CCBC5A'}/>
        <ColorSelector color={'#FA5C52'}/>
        <ColorSelector color={'#58D5FF'}/>
        <ColorSelector color={'#9152DD'}/>
        <ColorSelector color={'#F74B9C'}/>
      </S.ColorContainer>

    </SafeContainer>
  )
}

export default SettingsThemes
