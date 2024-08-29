// componentes
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

// css do toastify
 import 'react-toastify/dist/ReactToastify.css'

const DefaultPage = () => {
    return (
        <>
            <Header />
            <ToastContainer
                position='top-left'
                autoClose={1000}
                hideProgressBar={true}
                closeOnClick
                theme='colored'
            />
            <Outlet />
            <Footer/ >
        </>
    )
}

export default DefaultPage
