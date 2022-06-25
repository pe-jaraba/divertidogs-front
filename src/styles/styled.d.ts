// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontPrimary: string;

    colors: {
      main: string;
      secondary: string;
      light: string;
      warning: string;
      success: string;
      error: string;
    };
  }
}