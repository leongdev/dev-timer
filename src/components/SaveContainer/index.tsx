
import { ReactElement, ReactNode } from 'react'
import { Platform, StatusBar, useColorScheme } from 'react-native'
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

  if (Platform.OS === 'android') {
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

  return (
    <>
      <StatusBar barStyle={barColor} />
      <S.SafeTop2 color={statusColor || colors.background} />
      <S.SafeBottom2 color={backgroundColor || colors.background}>
        {children}
      </S.SafeBottom2>
    </>
  )
}

export default SafeContainer
