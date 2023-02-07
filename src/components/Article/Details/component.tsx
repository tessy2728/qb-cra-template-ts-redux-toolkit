import React from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom';
import { IArticle } from '../../../core/interfaces/article';
import { DefaultStore } from '../../../store/interfaces/store';
import { IThunkResponse } from '../../../store/interfaces/thunk';

const ArticleDetails = () => {
  const { articleId } = useParams();
  const data = useLoaderData() as IThunkResponse;
  let article: IArticle;
  if (data.error && data.error.name === "ConditionError") {
    article = useSelector((state: DefaultStore) => state.articles.articleDetails[articleId as string]);
  } else
    article = data.payload.result[0];

  return <div className="flex flex-column">
    <header className="card__item card__header">
      <h6 className="card__item card__item--small card__label">Featured</h6>
      <h2 className="card__item card__item--small card__title">{article.title}</h2>
    </header>
    <figure className="card__feature">
      <img src={article.picture} alt="waves" />
    </figure>
    <hr className="card__item card__divider" />

    <section className="card__item card__body">
      <p>{article.body}</p>
    </section>
  </div>;
};

export default ArticleDetails;
