import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    {import.meta.env.DEV && <TanStackRouterDevtools />}
  </>
)

export const Route = createRootRoute({ component: RootLayout })