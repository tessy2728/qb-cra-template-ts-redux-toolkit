import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';

import Login from './Auth/Login';
import Home, { articlesLoader, articleDetailLoader } from './Home';
import { isLoggedIn } from './Auth/helper';
import AppLayout from '../layouts/component';
import { ErrorPage } from './Error/component';
import ArticleDetails from './Home/Article/Details';
import ArticleList from './Home/Article/List';

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Login />
    },
    {
      path: "home",
      element: <Home />,
      loader: async () => {
        const isSignedIn = isLoggedIn();
        if (!isSignedIn) {
          return redirect("/");
        }
        return null;
      },
      children: [{
        path: "articles",
        shouldRevalidate: () => false,
        loader: articlesLoader,
        element: <ArticleList />,
      }, {
        path: 'articles/:articleId',
        element: <ArticleDetails />,
        loader: articleDetailLoader
      }]
    }]
  },


]);

export default router;