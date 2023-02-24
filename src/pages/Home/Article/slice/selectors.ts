import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { RootState } from '../../../../store/interfaces/store';
// First select the relevant part from the state
const selectDomain = (state: RootState) => state.articles || initialState;

export const selectArticles = createSelector(
    [selectDomain],
    articlesState => articlesState.articles,
);

export const selectArticleDetails = createSelector(
    [selectDomain],
    (articlesState) => articlesState.articleDetails,
);