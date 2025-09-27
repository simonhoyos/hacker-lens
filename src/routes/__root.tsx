import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Layout } from '../components/Layout';

function RootLayout() {
  return (
    <>
      <Layout activeTab="new">
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
