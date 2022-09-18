import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      gray: string;
      gray300: string;
      colorA: string;
      primary: string;
    }
  }
}
