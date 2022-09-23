import * as S from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../hooks/useResponsive'
import { useTheme } from 'styled-components/native'

const DropDown = () => {
  const { colors } = useTheme()
  const iconSize = useResponsive(0.5)

  return (
    <S.Container>
      <S.DropTitle>Title asasas</S.DropTitle>
      <S.RightIndicator >
        <MaterialCommunityIcons color={colors.background} name={'chevron-down'} size={iconSize}/>
      </S.RightIndicator>
    </S.Container>
  )
}

export default DropDown
