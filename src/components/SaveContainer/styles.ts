import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

interface ISafeTop {
  color: string;
}

export const SafeTop = styled(SafeAreaView)<ISafeTop>`
  flex: 0;
  background: ${({ color }) => color};
`

interface ISafeBottom {
  color: string;
}

export const SafeBottom = styled(SafeAreaView)<ISafeBottom>`
  flex: 1;
  background: ${({ color }) => color};
`

export const SafeBottom2 = styled.SafeAreaView<ISafeBottom>`
  flex: 1;
  background: ${({ color }) => color};
`

export const SafeTop2 = styled.SafeAreaView<ISafeTop>`
  flex: 0;
  background: ${({ color }) => color};
`
