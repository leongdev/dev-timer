
import { useDispatch, useSelector } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import { getUserInformation } from '../../../store/selectors/user'
import * as S from './styles'
import { QuoteClose, QuoteOpened } from '../../../components/SvgImages'
import DropDown from '../../../components/DropDown'

function AppHome ({ navigation }: RootTabScreenProps<any>) {
  const userInformation = useSelector(getUserInformation)
  const dispatch = useDispatch()

  console.log(userInformation)

  return (
    <SafeContainer>
      <Header
        title={userInformation.userName}
        subtitle='bora pro código!'
        rightComponent={<DropDown/>}
      />

      <S.QuoteContainer>
        <S.OpenQuoteContainer>
          <QuoteOpened/>
        </S.OpenQuoteContainer>
        <S.QuoteText>Primeiro resolva o
          problema depois escreva
          o código.</S.QuoteText>
        <S.CloseQuoteContainer>
          <QuoteClose/>
        </S.CloseQuoteContainer>
      </S.QuoteContainer>
    </SafeContainer>
  )
}

export default AppHome
