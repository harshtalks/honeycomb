import { createRootRoute, Link } from '@tanstack/react-router';
import RootComponent from './components/*';

// root router
const rootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

export default rootRoute;
