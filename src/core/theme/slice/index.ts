import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from '../../../store/webStore';
import { themes } from '../themes';

export interface ThemeState {
    selectedTheme: ThemeKeyType
}
export type ThemeKeyType = keyof typeof themes | 'light';

export const initialState: ThemeState = {
    selectedTheme: LS.getFromLS('theme') as ThemeKeyType || 'light'
};

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<ThemeKeyType>) {
            state.selectedTheme = action.payload;
        },
    },
});

export const { changeTheme } = theme.actions;
export default theme.reducer;
console.log(theme.getInitialState());
