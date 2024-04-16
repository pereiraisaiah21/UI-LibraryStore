import { RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderBanner from './components/HeaderBanner'
import router from './routes/routes';

function App() {

    return (
        <>
            <HeaderBanner />
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}

export default App
