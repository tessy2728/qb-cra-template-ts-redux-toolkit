import { combineReducers } from '@reduxjs/toolkit';

import { RootState } from './interfaces/store';
import articlesReducer from '../pages/Home/Article/slice';
import authReducer from '../pages/Auth/slice';
import toasterReducer from '../slices/toaster.slice';
import themeReducer from '../core/theme/slice'
import { Reducer, AnyAction } from '@reduxjs/toolkit';

export type RootStateKeyType = keyof RootState;
type RequiredRootState = Required<RootState>;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
};

const reducerList: InjectedReducersType = {
  auth: authReducer,
  articles: articlesReducer,
  toaster: toasterReducer,
  theme: themeReducer
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
