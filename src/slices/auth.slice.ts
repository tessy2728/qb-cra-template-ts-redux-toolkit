import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UserAuth } from '../core/interfaces/user';
import { getAccessToken, getUserName, setUserSession, removeUserSession } from '../core/utils/sessionHandler';
import { getData, postData } from '../core/api';
import toaster, { showToaster } from './toaster.slice';
import { Dispatch } from '@reduxjs/toolkit';
import { LOGIN_ENDPOINT } from '../core/config/urlConfig';
import { AxiosError } from 'axios';
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
    email:string,
    password:string
}

const getErrorMessage = (payload:any) => {
    if(!payload.statusCode)
        return payload.message;
    switch(payload.statusCode) {
        case 401: return 'You are not authorized to view the page.';
        case 500: 
        default:
            return 'Oops, Something Went Wrong!' 
    }
}

export const signIn =
createAsyncThunk('signIn',async(postParams:ILoginModal, thunkAPI) =>{
    try {
        const response = await postData(LOGIN_ENDPOINT, postParams);
        return response;
    } catch (err:any) {
        return thunkAPI.rejectWithValue(err.data)
      }
});

const session = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getSessionStart(state) {
            state.loading = true;
            state.loginError = '';
        },
        getLoginSuccess(state, action) {
            const { result, token } = action.payload;
            state.name = result.name;
            state.userDetails = result;
            state.accessToken = token;
            state.isSignedIn = true;
            setUserSession({ name:result.name, accessToken: token, userDetails:result });
        },
        getLogoutSuccess(state) {
            state.name = '';
            state.accessToken = '';
            state.isSignedIn = false;
            removeUserSession();
        },
        setLoginError(state, action) {
            state.loading = false;
            state.loginError= getErrorMessage(action?.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, session.caseReducers.getSessionStart)
        builder.addCase(signIn.fulfilled, session.caseReducers.getLoginSuccess)
        builder.addCase(signIn.rejected, session.caseReducers.setLoginError)
    }
});

export const { getSessionStart, getLoginSuccess, getLogoutSuccess } = session.actions;
export default session.reducer;


export const logout = () => async (dispatch:Dispatch) => {
    dispatch(getLogoutSuccess());
    dispatch(showToaster({ message: 'Sign out successful' }));
    try {
        await getData('/logout/');
    } catch (error) {}
};
