

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectThemeKey } from './slice/selectors';
import { Theme, themes } from './themes';
import { ThemeKeyType } from './slice';

export const AppThemeProvider = (props: { children: React.ReactChild }) => {

  const themeKey = useSelector(selectThemeKey) as ThemeKeyType;
  console.log(themeKey, themes);
  const selectedTheme: Theme = themes[themeKey]
  return (
    <ThemeProvider theme={selectedTheme}>
      {React.Children.only(props.children)}
    </ThemeProvider>
  );
};