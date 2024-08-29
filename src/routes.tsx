// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// páginas
import DefaultPage from './pages/DefaultPage'
import Home from './pages/Home'
import Cart from './pages/Cart'
import MostViewed from './pages/MostViewed'
import Favorites from './pages/Favorites'
import Categories from './pages/Categories'
import User from './pages/User'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='carrinho' element={<Cart />} />
                    <Route path='mais-visitados' element={<MostViewed />} />
                    <Route path='favoritos' element={<Favorites />} />
                    <Route
                        path='categorias/:category'
                        element={<Categories />}
                    />
                    <Route path='usuario' element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
