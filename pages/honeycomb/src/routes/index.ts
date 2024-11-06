import { createRouter } from '@tanstack/react-router';
import indexRoute from './index/*';
import rootRoute from './root/*';

const routeTree = rootRoute.addChildren([indexRoute]);

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
});

export default router;
