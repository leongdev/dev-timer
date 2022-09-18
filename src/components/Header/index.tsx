
import * as S from './styles'
import * as SVG from '../../components/SvgImages'
import { useTheme } from 'styled-components/native'
import useResponsive from '../../hooks/useResponsive'
import { TouchableOpacity } from 'react-native'
import { ReactNode } from 'react'

interface IHeader {
  title: string,
  subtitle?: string,
  hasBack?: boolean,
  onPressBack?: ()=> void,
  rightComponent?: ReactNode
}

function Header ({
  title,
  subtitle,
  hasBack,
  onPressBack,
  rightComponent
}: IHeader) {
  const { colors } = useTheme()
  const backIconSize = useResponsive(0.6)

  const renderBackButton = () => {
    return (
      <TouchableOpacity onPress={() => onPressBack() || null}>
        <S.BackContainer>
          <SVG.IconBack height={backIconSize} width={backIconSize} colorA={colors.primary}/>
          <S.BackTitle>Voltar</S.BackTitle>
        </S.BackContainer>
      </TouchableOpacity>
    )
  }

  return (
    <S.Container>
      <S.BottomLine/>
      {hasBack && renderBackButton()}
      <S.HeaderTitle>{title}</S.HeaderTitle>
      {subtitle && (<S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>)}
      {rightComponent && (<S.RightContainer/>)}
    </S.Container>
  )
}

export default Header
