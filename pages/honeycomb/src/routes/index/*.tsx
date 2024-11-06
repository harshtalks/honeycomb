import { createRoute } from '@tanstack/react-router';
import rootRoute from '../root/*';
import IndexComponent from './components/*';

//
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
});

export default indexRoute;
