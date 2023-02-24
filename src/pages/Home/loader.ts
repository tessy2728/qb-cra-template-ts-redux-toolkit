import { fetchArticleById, fetchArticles } from './Article/slice';
import store from "../../store";
import { IThunkResponse } from "../../store/interfaces/thunk";

export const articlesLoader = async () => {
  return await store.dispatch(fetchArticles()) as unknown as IThunkResponse;
};

export const articleDetailLoader = async ({ params: { articleId } }: any) => {
  return await store.dispatch(fetchArticleById(articleId)) as unknown as IThunkResponse;
};

