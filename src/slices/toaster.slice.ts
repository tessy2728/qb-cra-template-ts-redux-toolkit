import { createSlice } from '@reduxjs/toolkit';

export interface ToasterState {
    message: string,
    show: boolean,
    autoHideDuration?: number | undefined,
    type: string
}

const initialState: ToasterState = {
    message: '',
    show: false,
    type: ''
};

const toaster = createSlice({
    name: 'toaster',
    initialState,
    reducers: {
        showToaster(state, action) {
            state.message = action.payload.message;
            state.autoHideDuration = action.payload.autoHideDuration;
            state.type = action.payload.type;
            state.show = true;
        },
        hideToaster(state) {
            state.message = '';
            state.type = '';
            state.show = false;
            state.autoHideDuration = undefined;
        },
    },
});

export const { showToaster, hideToaster } = toaster.actions;
export default toaster.reducer;
