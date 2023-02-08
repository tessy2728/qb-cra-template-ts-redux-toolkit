import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UserAuth } from '../core/interfaces/user';
import { getAccessToken, getUserName, setUserSession, removeUserSession } from '../core/utils/sessionHandler';
import { getData, postData } from '../core/api';
import { showToaster } from './toaster.slice';
import { Dispatch } from '@reduxjs/toolkit';
import { LOGIN_ENDPOINT } from '../core/config/urlConfig';
import { createFalse } from 'typescript';

const accessToken = getAccessToken();

const initialState: UserAuth = {
    name: getUserName() || '',
    userDetails: {},
    accessToken: accessToken || '',
    isSignedIn: Boolean(accessToken),
    loading: false,
    loginError: ''
};

interface ILoginModal {
    email: string,
    password: string
}

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

// export const logout = createAsyncThunk('user/logout', async () => await getData('/logout'));

const session = createSlice({
    name: 'user',
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
            showToaster({ message: 'Signed out successfully!' });
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
        // builder.addCase(logout.fulfilled, session.caseReducers.logout)
    }
});

export const { startSession, updateLoginSuccess, logout } = session.actions;
export default session.reducer;

