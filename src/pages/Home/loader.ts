import { fetchArticleById, fetchArticles } from '../../slices/articles.slice';
import store from "../../store";
import { DefaultStore } from "../../store/interfaces/store";
import { IThunkResponse } from "../../store/interfaces/thunk";
import {
  defer
} from "react-router-dom";

export const articlesLoader = async () => {
  return await store.dispatch(fetchArticles()) as unknown as IThunkResponse;
};

export const articleDetailLoader = async ({ params: { articleId } }: any) => {
  return await store.dispatch(fetchArticleById(articleId)) as unknown as IThunkResponse;
};

