import styled from "styled-components";
import * as colors from '../../core/config/colors';

export const Article = styled.article`
    width: 275px;
    font-family: 'Playfair Display', serif;
    text-align: center;
  
    transition: all .125s;
    transform: scale(1) translateY(0px);
    padding-top: .1px;
    padding-bottom: .1px;
    position: relative;
  
    background-color: ${colors.WHITE};
    color: ${colors.MEDIUM_GREY};
    box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    &:hover .card__wrapper {
        box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
    }
    &:hover .card__wrapper:after {
        transform: scale(0.95) translateY(10px);
    }
    .card__box {
        padding-right: 35px;
        padding-left: 35px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .card__item  {
        margin-top: 20px;
        margin-bottom: 20px;
    }`

export const ArticleImage = styled.figure`
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    .card__img {
        display: block;
        max-width: 100%;
        height: 240px;
        width: 275px;
      }`
export const ArticleHeader = styled.header`
    position: relative;
    z-index: 1;
    .card__title {
        color: ${colors.DARK_GREY};
        font-size: 30px;
        font-weight: 400;
        line-height: 1.25;
    }
    .card__label {
        color: ${colors.LIGHT_GREY};
        font-family: 'Montserrat', sans-serif;
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: .2em;
    }`

export const Divider = styled.hr`
    display: block;
    width: 100%;
    height: 15px;
    border: none;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOHB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAyOCAxNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjggMTUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNERURFREUiIGQ9Ik0yNy41LDdoLTZDMjEuMiwzLjEsMTgsMCwxNCwwUzYuOCwzLjEsNi41LDdoLTZDMC4yLDcsMCw3LjIsMCw3LjVTMC4yLDgsMC41LDhoNmMwLjMsMy45LDMuNSw3LDcuNSw3czcuMi0zLjEsNy41LTdoNkMyNy44LDgsMjgsNy44LDI4LDcuNVMyNy44LDcsMjcuNSw3eiBNMTQsMWMzLjQsMCw2LjIsMi42LDYuNSw2SDcuNUM3LjgsMy42LDEwLjYsMSwxNCwxeiBNMTQsMTRjLTMuNCwwLTYuMi0yLjYtNi41LTZoMTIuOUMyMC4yLDExLjQsMTcuNCwxNCwxNCwxNHoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: center center;`

export const ArticleBody = styled.section`
    font-size: 12px;
    line-height: 1.75;
  `