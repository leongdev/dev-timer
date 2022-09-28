
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setTimerPreferences } from '../../../store/action/user'
import { getTimerPreferences } from '../../../store/selectors/user'

function SettingsTimer ({ navigation }: RootTabScreenProps<any>) {
  const index = useSelector(getTimerPreferences)
  const dispatch = useDispatch()

  const onSelectTime = (index: number) => {
    dispatch(setTimerPreferences(index))
  }

  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack(null)}
        title='Temporizador'
      />

      <S.Container>
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(60)}
          inverted={index !== 60}
          title={'60 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(55)}
          inverted={index !== 55}
          title={'55 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(50)}
          inverted={index !== 50}
          title={'50 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(45)}
          inverted={index !== 45}
          title={'45 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(40)}
          inverted={index !== 40}
          title={'40 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(35)}
          inverted={index !== 35}
          title={'35 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(30)}
          inverted={index !== 30}
          title={'30 minutos'}
        />
        <S.LineSpace/>
        <Button
          onPress={() => onSelectTime(25)}
          inverted={index !== 25}
          title={'25 minutos'}
        />
        <S.LineSpace/>
      </S.Container>

    </SafeContainer>
  )
}

export default SettingsTimer
