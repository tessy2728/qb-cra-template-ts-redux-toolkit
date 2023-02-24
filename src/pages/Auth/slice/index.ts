import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postData } from '../../../core/api';
import { LOGIN_ENDPOINT } from '../../../core/config/urlConfig';
import { getAccessToken, getUserName, removeUserSession, setUserSession } from '../helper';
import { AuthState, ILoginModal } from '../interfaces';

const accessToken = getAccessToken();

export const initialState: AuthState = {
    name: getUserName() || '',
    userDetails: {},
    accessToken: accessToken || '',
    isSignedIn: Boolean(accessToken),
    loading: false,
    loginError: ''
};

const getErrorMessage = (payload: any) => {
    if (!payload.statusCode)
        return payload.message;
    switch (payload.statusCode) {
        case 401: return 'You are not authorized to view the page.';
        case 500:
        default:
            return 'Oops, Something Went Wrong!'
    }
}

export const signIn = createAsyncThunk('user/signIn', async (postParams: ILoginModal, thunkAPI) => {
    try {
        const response = await postData(LOGIN_ENDPOINT, postParams);
        return response;
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.data)
    }
});

const session = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startSession(state) {
            state.loading = true;
            state.loginError = '';
        },
        updateLoginSuccess(state, action) {
            const { result, token } = action.payload;
            setUserSession({ name: result.name, accessToken: token, userDetails: result });
            state = {
                ...state,
                name: result.name,
                userDetails: result,
                accessToken: token,
                isSignedIn: true,
                loading: false
            };
            return state;
        },
        logout(state) {
            state.name = '';
            state.accessToken = '';
            state.isSignedIn = false;
            removeUserSession();
        },
        updateLoginError(state, action) {
            state.loading = false;
            state.loginError = getErrorMessage(action?.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, session.caseReducers.startSession)
        builder.addCase(signIn.fulfilled, session.caseReducers.updateLoginSuccess)
        builder.addCase(signIn.rejected, session.caseReducers.updateLoginError)
    }
});

export const { startSession, updateLoginSuccess, logout } = session.actions;
export default session.reducer;

