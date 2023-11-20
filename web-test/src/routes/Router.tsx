import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';

const Router = createBrowserRouter([
  {
    path: '/:query?',
    element: <Home />,
  },
  {
    path: '/details/:name?',
    element: <Details />,
  },
]);

export default Router;
