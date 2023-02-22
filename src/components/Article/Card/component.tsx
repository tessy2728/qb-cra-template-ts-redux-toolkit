import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IArticle } from '../../../core/interfaces/article';
import { Article, ArticleImage, ArticleHeader, Divider, ArticleBody } from '../style';

const ArticleCard = (props: { article: IArticle, key: number }) => {
  const { article } = props;
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`${article.id}`)
  }

  return <Article onClick={navigateToDetails}>
    <ArticleImage>
      <img src={article.picture} className="card__img" alt="waves" width="275" height="240" />
    </ArticleImage>
    <div className="card__box">
      <ArticleHeader className="card__item">
        <h6 className="card__item card__item--small card__label">Featured</h6>
        <h2 className="card__item card__item--small card__title">{article.title}</h2>
      </ArticleHeader>
      <Divider className="card__item" />
      <ArticleBody className="card__item">
        <p>{article.body}</p>
      </ArticleBody>
    </div>
  </Article>
}

export default ArticleCard;