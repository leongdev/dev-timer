
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import InfoCard from '../../../components/InfoCard'
import Input from '../../../components/Input'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Button from '../../../components/Button'

import * as S from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserMoneyPreferences } from '../../../store/action/user'
import { getUserMoneyPreferences } from '../../../store/selectors/user'
import { IMoneyPreferences } from '../../../store/reducers/user'
import { formatMoney } from '../../../utils/text'

function SettingsFreelanceCalculator ({ navigation }: RootTabScreenProps<any>) {
  const userMoneyInfo: IMoneyPreferences = useSelector(getUserMoneyPreferences)
  const [earnPerMoth, setEarnPerMoth] = useState(userMoneyInfo.earnPerMoth)
  const [hoursPerDay, setHoursPerDay] = useState(userMoneyInfo.hoursPerDay)
  const [weekWorkDays, setWeekWorkDays] = useState(userMoneyInfo.weekWorkDays)

  const dispatch = useDispatch()

  const onCalcHours = () => {
    if (earnPerMoth && hoursPerDay && weekWorkDays) dispatch(setUserMoneyPreferences(earnPerMoth, hoursPerDay, weekWorkDays))
  }

  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack()}
        title='Freelancer'
      />
      <InfoCard subtitle={'/hora'} text={`R$${formatMoney(userMoneyInfo.pricePerHour)}`}/>
      <S.LineSpace/>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <S.TitleText>Quanto você quer ganhar por mês?</S.TitleText>
          <Input
            hasCustomValue
            customValue={earnPerMoth.toString().length > 0 ? earnPerMoth.toString() : ''}
            isNumeric
            placeholder={'Quanto quer ganhar por mês'}
            onChangedText={(text) => { setEarnPerMoth(text) }}
          />
          <S.TitleText>Quantas horas quer trabalhar por dia?</S.TitleText>
          <Input
            hasCustomValue
            customValue={hoursPerDay.toString().length > 0 ? hoursPerDay.toString() : ''}
            isNumeric
            placeholder={'Quantas horas quer trabalhar por dia'}
            onChangedText={(text) => { setHoursPerDay(text) }}
          />
          <S.TitleText>Quantos dias quer trabalhar por semana?</S.TitleText>
          <Input
            hasCustomValue
            customValue={weekWorkDays.toString().length > 0 ? weekWorkDays.toString() : ''}
            isNumeric
            placeholder={'Quantos dias quer trabalhar por semana'}
            onChangedText={(text) => { setWeekWorkDays(text) }}
          />
          <Button onPress={() => onCalcHours()} title={'Calcular'}/>
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeContainer>
  )
}

export default SettingsFreelanceCalculator
