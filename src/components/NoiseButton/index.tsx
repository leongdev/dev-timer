
import * as S from './styles'

interface INoiseButton {
  icon: string;
  isPlaying?: boolean;
  onPressNoise?: ()=> void;
}

const NoiseButton = ({ icon, isPlaying, onPressNoise }: INoiseButton) => {
  return (
    <S.Container onPress={() => onPressNoise && onPressNoise()}>
      {isPlaying && (<S.PlayingBorder/>)}
      <S.Text>{icon}</S.Text>
    </S.Container>
  )
}

export default NoiseButton
