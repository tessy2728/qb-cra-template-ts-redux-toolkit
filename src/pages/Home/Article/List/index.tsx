import React from 'react';
import loadable from '@loadable/component';
import Loader from '../../../../components/Loader';

const ArticleList = loadable(() => import('./component'), {
    fallback: <Loader />,
})
export default ArticleList;
