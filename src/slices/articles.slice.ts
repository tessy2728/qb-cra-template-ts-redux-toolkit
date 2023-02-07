import { createAsyncThunk, createSlice, ThunkDispatch } from '@reduxjs/toolkit';
import { AsyncThunk, BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { getData } from '../core/api';
import { ARTICLE, ARTICLES } from '../core/config/urlConfig';
import { IArticle } from '../core/interfaces/article';
import { DefaultStore } from '../store/interfaces/store';
import { IThunkResponse } from '../store/interfaces/thunk';
interface IArticles {
    articles: IArticle[],
    fetchStatus: string,
    articleDetails: any
}
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (params, thunkAPI) => {
    try {
        return await getData(ARTICLES);
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.data)
    }
}
, {
    condition: (params, thunkAPI) => {
        const {articles} = thunkAPI.getState() as DefaultStore;
        const fetchStatus = articles?.fetchStatus;
        // console.log(articles)
        if (fetchStatus === 'fulfilled' || fetchStatus === 'pending') {
        // Already fetched or in progress, don't need to re-fetch
            return false
        }
    },
    // dispatchConditionRejection: true
}
);

export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (articleId:string, thunkAPI) => {
    try {
        return await getData(`${ARTICLE}/${articleId}`);
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.data)
    }
}
, {
    condition: (articleId, thunkAPI) => {
        const {articles} = thunkAPI.getState() as DefaultStore;
        const fetchStatus = articles?.articleDetails[articleId]?.status;
        if (fetchStatus === 'fulfilled' || fetchStatus === 'pending') {
        // Already fetched or in progress, don't need to re-fetch
        return false
        }
    },
    // dispatchConditionRejection: true
}
);


const initialState: IArticles = {
    articles: [],
    fetchStatus:'',
    articleDetails: {}

};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        startFetching(state, action){
            state.fetchStatus = 'pending';
        },
        setArticles(state, action) {
            // console.log(action.payload)
            state.articles = action.payload.result;
            state.fetchStatus = 'fulfilled'
        },
        endFetching(state, action){
            state.fetchStatus = '';
        },
        startArticleFetching(state,action) {
            const {meta} = action as IThunkResponse;
            state.articleDetails[meta.arg] = {status:'pending'};
        },
        setArticleDetails(state,action) {
            const {meta} = action as IThunkResponse;
            state.articleDetails[meta.arg] = action.payload.result[0]
            state.articleDetails[meta.arg].status = 'fulfilled';
        },
        endArticleFetching(state, action){
            const {meta} = action as IThunkResponse;
            state.articleDetails[meta.arg].status = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, articleSlice.caseReducers.startFetching)
        builder.addCase(fetchArticles.fulfilled, articleSlice.caseReducers.setArticles)
        builder.addCase(fetchArticles.rejected, articleSlice.caseReducers.endFetching)
        builder.addCase(fetchArticleById.pending, articleSlice.caseReducers.startArticleFetching)
        builder.addCase(fetchArticleById.fulfilled, articleSlice.caseReducers.setArticleDetails)
    }
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
