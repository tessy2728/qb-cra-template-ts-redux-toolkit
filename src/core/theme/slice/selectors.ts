

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';
import { RootState } from '../../../store/interfaces/store';
import { themes } from '../themes';

export const selectThemeDomain = (state: RootState) => state.theme || initialState;

// export const selectTheme = createSelector(
//     [selectThemeDomain],
//     theme => themes[theme.selectedTheme],
// );
export const selectThemeKey = createSelector(
    [selectThemeDomain],
    themeState => themeState.selectedTheme,
);