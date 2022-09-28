import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPrimaryColor } from '../../store/selectors/theme'
import { setPrimaryColor } from '../../store/action/theme'

interface IColorSelector {
  color: string
}

const ColorSelector = ({ color }: IColorSelector) => {
  const currentPrimaryColor = useSelector(getCurrentPrimaryColor)
  const dispatch = useDispatch()

  const onSelectColor = () => {
    console.log('PASSEI')
    dispatch(setPrimaryColor(color))
  }

  return (
    <S.ButtonContainer
      onPress={onSelectColor}
      color={color}
    >
      {currentPrimaryColor === color && <S.SelectedBorder />}
    </S.ButtonContainer>
  )
}

export default ColorSelector
