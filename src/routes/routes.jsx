import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Article from '../pages/Article'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/article/:id',
        element: <Article />
    },
])

export default router
