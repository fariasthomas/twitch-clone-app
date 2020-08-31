import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes';

import light from './src/styles/themes/light';
import dark from './src/styles/themes/dark';
import usePersistedState from './src/utils/usePersistedState';

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar  styles={light} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}
