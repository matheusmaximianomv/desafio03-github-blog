import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Foreground } from './components/Foreground';

import { GithubContextProvider } from './contexts/github';

import { Router } from './Router';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Foreground />

      <BrowserRouter>
        <GithubContextProvider>
          <Router />
        </GithubContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
