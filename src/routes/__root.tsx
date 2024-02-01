import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Menu } from '../components/menu'
import { CheckListProvider } from '../providers/CheckListProvider'
import { NotFound } from '../components/NotFound'
import { Footer } from '../components/footer'


export const Route = createRootRoute({
  component: () => (
    <CheckListProvider>
        <Menu />
        <Outlet />
        <Footer/>
    </CheckListProvider>
  ),
  notFoundComponent: NotFound
})