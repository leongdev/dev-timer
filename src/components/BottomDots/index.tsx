import * as S from './styles'

interface IBottomDots {
  dotIndex: number
}

const BottomDots = ({ dotIndex }: IBottomDots) => {
  return (
    <S.Container>
      {dotIndex === 0 ? <S.DotFilled/> : <S.DotOutlined/>}
      {dotIndex === 1 ? <S.DotFilled/> : <S.DotOutlined/>}
    </S.Container>
  )
}

export default BottomDots
