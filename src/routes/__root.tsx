import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { Menu } from '../components/menu'
import { CheckListProvider } from '../providers/CheckListProvider'
import { NotFound } from '../components/NotFound'
import { Footer } from '../components/footer'


export const Route = createRootRoute({
  component: () => {
    const isOnTrashPathname = useRouterState().location.pathname !== '/trash'

    return (
      <CheckListProvider>
          <Menu isOnTrashPathname={isOnTrashPathname} />
          <Outlet />
          <Footer/>
      </CheckListProvider>
    )
  },
  notFoundComponent: NotFound
})