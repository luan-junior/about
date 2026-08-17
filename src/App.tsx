import { ThemeProvider } from 'styled-components'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const basepath = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

const router = createRouter({ routeTree, basepath })

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
