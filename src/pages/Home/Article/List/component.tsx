import React, { useEffect } from 'react';
import ArticleCard from '../Card'
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../Auth/helper';
import { IThunkResponse } from '../../../../store/interfaces/thunk';
import { IArticle } from '../interfaces';
import { selectArticles } from '../slice/selectors';

const ArticleList = () => {
    const data = (useLoaderData() as IThunkResponse);
    let articles: IArticle[];
    if (data.error && data.error.name === "ConditionError") {
        articles = useSelector(selectArticles);
    } else
        articles = data.payload.result;

    const userId = getUserId();

    return <div className="flex flex-column">
        <p className="text-left">Here are some articles for you:</p>
        <div className="grid grid-cols-3">{articles.filter((article: IArticle) => article.user_id == userId).map((article: IArticle) => <ArticleCard key={article.id} article={article} />)}</div>
    </div>;
};

export default ArticleList;
