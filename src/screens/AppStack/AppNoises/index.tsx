import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import Sounds, { ISound } from '../../../assets/sounds'
import NoiseButton from '../../../components/NoiseButton'

import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { getCurrentSound } from '../../../store/selectors/sounds'
import { playSound } from '../../../store/action/sounds'
import SoundBar from '../../../components/SoundBar'
import Layout from '../../../../constants/Layout'

function AppNoises ({ navigation }: RootTabScreenProps<any>) {
  const { currentSound } = useSelector(getCurrentSound)
  const { width } = Layout.window
  const dispatch = useDispatch()

  const renderItems = (item: ISound) => {
    return (
      <NoiseButton
        onPressNoise={() => dispatch(playSound(item))}
        isPlaying={currentSound?.id === item.id}
        icon={item.icon}
      />
    )
  }

  return (
    <SafeContainer>
      <Header title='Sons' />
      <S.NoiseList
        contentContainerStyle={{ paddingBottom: width * 0.3 }}
        numColumns={2}
        keyExtractor={({ id }: ISound) => `${id}`}
        data={Sounds}
        renderItem={({ item }: any) => renderItems(item)}
      />

      {currentSound.name && (<SoundBar/>)}
    </SafeContainer>
  )
}

export default AppNoises
