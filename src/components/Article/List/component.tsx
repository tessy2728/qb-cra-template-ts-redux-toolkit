import React, { useEffect } from 'react';
import ArticleCard from '../../ArticleCard/component'
import { Await, useLoaderData } from 'react-router-dom';
import { IArticle } from '../../../core/interfaces/article';
import { getUserId } from '../../../core/utils/sessionHandler';
import { useSelector } from 'react-redux';
import { DefaultStore } from '../../../store/interfaces/store';
import { IThunkResponse } from '../../../store/interfaces/thunk';

const ArticleList = () => {
    const data= (useLoaderData() as IThunkResponse);
    let articles: IArticle[];
    if(data.error && data.error.name === "ConditionError") {
        articles = useSelector((state: DefaultStore) => state.articles.articles);
    } else 
        articles= data.payload.result;

    const userId = getUserId();

    return <React.Suspense
        fallback={<p>Loading data...</p>}
    >
        <Await
            resolve={articles}
            errorElement={
                <p>Error loading articles!</p>
            }
        >
            <div className="flex flex-column">
                <p className="text-left">Here are some articles for you:</p>
                <div className="grid grid-cols-3">{articles.filter((article: IArticle) => article.user_id == userId).map((article: IArticle) => <ArticleCard key={article.id} article={article} />)}</div>
            </div>
        </Await>
    </React.Suspense>;
};

export default ArticleList;
