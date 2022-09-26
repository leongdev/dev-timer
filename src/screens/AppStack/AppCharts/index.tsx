
import { useTheme } from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import { getCurrentSound } from '../../../store/selectors/sounds'
import SoundBar from '../../../components/SoundBar'
import DropDown from '../../../components/DropDown'
import * as S from './styles'

function AppCharts ({ navigation }: RootTabScreenProps<any>) {
  const { currentSound } = useSelector(getCurrentSound)
  const { colors } = useTheme()

  const dispatch = useDispatch()

  return (
    <SafeContainer>
      <Header
        title='Tempo'
        subtitle={'gasto no app'}
        rightComponent={<DropDown title={'Todos'}/>}
      />
      <S.TimeContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Intervalos finalizados</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>300</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Intervalos não finalizados</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>300</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Duração de trabalho</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>10:00:00</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
      </S.TimeContainer>
      <Header
        title='Dinheiro'
        subtitle={'que ganhou codando'}
      />
      <S.MoneyDisplayContainer>
        <S.MoneyValueText>R$ 1.000,00</S.MoneyValueText>
      </S.MoneyDisplayContainer>
  <S.MoneyContainer/>
      {currentSound.name && (<SoundBar/>)}
    </SafeContainer>
  )
}

export default AppCharts
