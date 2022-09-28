import * as S from './styles'

interface IInfoCard {
  text: string,
  subtitle?: string,
  onPressInfoButton?: ()=> void
}

const InfoCard = ({ text, subtitle, onPressInfoButton }: IInfoCard) => {
  return (
    <S.MoneyDisplayContainer>
      <S.MoneyValueText>{text}<S.MoneySubtitle>{subtitle}</S.MoneySubtitle></S.MoneyValueText>
    </S.MoneyDisplayContainer>
  )
}

export default InfoCard
