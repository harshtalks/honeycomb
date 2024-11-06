import { Providers } from '@src/components/providers';
import { Outlet } from '@tanstack/react-router';

const RootComponent = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default RootComponent;
