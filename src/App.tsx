import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Foreground } from './components/Foreground';

import { Router } from './Router';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Foreground />

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
