
import { ReactElement, ReactNode } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

interface ISafeContainer {
  children: ReactNode;
  statusColor?: string;
  backgroundColor?: string;
}

const SafeContainer = ({
  children,
  statusColor,
  backgroundColor
}: ISafeContainer): ReactElement => {
  const deviceTheme = useColorScheme()
  const barColor =
    deviceTheme && deviceTheme === 'light' ? 'dark-content' : 'light-content'
  const { colors } = useTheme()

  return (
    <>
      <StatusBar barStyle={barColor} />
      <S.SafeTop color={statusColor || colors.background} />
      <S.SafeBottom color={backgroundColor || colors.background}>
        {children}
      </S.SafeBottom>
    </>
  )
}

export default SafeContainer
