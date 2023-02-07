import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IArticle } from '../../core/interfaces/article';

const ArticleCard = (props:{article: IArticle, key: number}) => {
    const {article} = props;
    const navigate = useNavigate();

    const navigateToDetails = () => {
      navigate(`${article.id}`)
    }

    return <article className="card" onClick={navigateToDetails}>
    <div className="card__wrapper">
      <figure className="card__feature">
        <img src={article.picture} className="card__img" alt="waves" width="275" height="240" />
      </figure>
      <div className="card__box">
        <header className="card__item card__header">
          <h6 className="card__item card__item--small card__label">Featured</h6>
          <h2 className="card__item card__item--small card__title">{article.title}</h2>
        </header>
        <hr className="card__item card__divider"/>
        <section className="card__item card__body">
          <p>{article.body}</p>
        </section>
      </div>
    </div>
  </article>
}

export default ArticleCard;