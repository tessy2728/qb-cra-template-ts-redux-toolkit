import { combineReducers } from '@reduxjs/toolkit';

import { DefaultStore } from './interfaces/store';
import articlesSlice from '../slices/articles.slice';
import userReducer from '../slices/auth.slice';
import toasterReducer from '../slices/toaster.slice';

const reducerList: DefaultStore = {
    user: userReducer,
    toaster: toasterReducer,
    articles: articlesSlice
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
