import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import ArticleList from "../components/Article/List";
import ArticleDetails from '../components/Article/Details';
import Home, { articlesLoader, articleDetailLoader } from './Home';
import {isLoggedIn} from '../core/utils/sessionHandler'
import ProtectedRoute from '../components/ProtectedRoute/component';
import AppLayout from '../layouts/component';
import { ErrorPage } from './Error/component';

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
      element: <ProtectedRoute isSignedIn={isLoggedIn} redirectPath="/"><Home /></ProtectedRoute>,
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