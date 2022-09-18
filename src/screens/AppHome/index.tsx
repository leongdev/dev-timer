
import * as S from './styles'
import * as SVG from '../../components/SvgImages'
import { RootTabScreenProps } from '../types'
import { Pressable, View } from 'react-native'
import Layout from '../../../constants/Layout'
import Button from '../../components/Button'
import { useEffect } from 'react'

import { useTheme } from 'styled-components/native'
import { useDispatch } from 'react-redux'

import SafeContainer from '../../components/SaveContainer'
import Header from '../../components/Header/index'

function AppHome ({ navigation }: RootTabScreenProps) {
  const { colors } = useTheme()

  const dispatch = useDispatch()

  return (
    <SafeContainer>
      <Header
        title='Leon'
        subtitle='bora pro código!'
      />
    </SafeContainer>
  )
}

export default AppHome
