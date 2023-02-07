import loadable from '@loadable/component';
import { articlesLoader, articleDetailLoader } from './loader';

const Home = loadable(() => import('./component'));

export default Home;
export { articlesLoader,  articleDetailLoader};
