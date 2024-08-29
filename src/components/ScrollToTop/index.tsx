// funções
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    // caminho atual
    const { pathname } = useLocation()

    // faz o scroll para o início da página ao trocar o caminho
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default ScrollToTop