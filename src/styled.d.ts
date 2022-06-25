// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primaryFont: string,
    colors: {
        primary: string,
        secondary: string,
        black: string
    }
  }
}