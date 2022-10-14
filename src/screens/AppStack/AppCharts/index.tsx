
import { useSelector } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import { getCurrentSound } from '../../../store/selectors/sounds'
import SoundBar from '../../../components/SoundBar'
import DropDown from '../../../components/DropDown'
import * as S from './styles'
import InfoCard from '../../../components/InfoCard'
import { formatMoney } from '../../../utils/text'
import {
  getFinishedIntervals,
  getNoFinishedIntervals,
  getTotalMoney,
  getTotalTime
} from '../../../store/selectors/projects'

function AppCharts ({ navigation }: RootTabScreenProps<any>) {
  const { currentSound } = useSelector(getCurrentSound)
  const finishedIntervals = useSelector(getFinishedIntervals)
  const noFinishedIntervals = useSelector(getNoFinishedIntervals)
  const getMoney = useSelector(getTotalMoney)
  const totalTime = useSelector(getTotalTime)

  function secondsToHms (d: number) {
    d = Number(Math.abs(d))
    const h = Math.floor(d / 3600)
    const m = Math.floor(d % 3600 / 60)
    const s = Math.floor(d % 3600 % 60)

    let hDisplay = h > 0 ? h + (h === 1 ? '' : '') : '00'
    let mDisplay = m > 0 ? m + (m === 1 ? '' : '') : '00'
    let sDisplay = s > 0 ? s + (s === 1 ? '' : '') : '00'

    if (sDisplay < 10 && sDisplay > 0) {
      sDisplay = `0${sDisplay}`
    }

    if (mDisplay < 10 && mDisplay > 0) {
      mDisplay = `0${mDisplay}`
    }

    if (hDisplay < 10 && hDisplay > 0) {
      hDisplay = `0${hDisplay}`
    }

    return `${hDisplay}:${mDisplay}:${sDisplay}`
  }

  return (
    <SafeContainer>
      <Header
        title='Tempo'
        subtitle={'gasto no app'}
        rightComponent={<DropDown />}
      />
      <S.TimeContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Intervalos finalizados</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>{finishedIntervals}</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Intervalos não finalizados</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>{noFinishedIntervals}</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
        <S.TimeItemContainer>
          <S.TimeTitleText>Duração de trabalho</S.TimeTitleText>
          <S.TimeValueContainer>
            <S.TimeValueText>{secondsToHms(totalTime)}</S.TimeValueText>
          </S.TimeValueContainer>
        </S.TimeItemContainer>
      </S.TimeContainer>
      <Header
        title='Dinheiro'
        subtitle={'que ganhou codando'}
      />
      <InfoCard text={getMoney > 0 ? `R$${formatMoney(getMoney)}` : 'R$0,0'} />
  <S.MoneyContainer/>
      {currentSound.name && (<SoundBar/>)}
    </SafeContainer>
  )
}

export default AppCharts
