// componentes
import Banner from '@/components/Banner'
import CategoriesList from '@/components/CategoriesList'

// imagens
import imgMobile from '@/assets/mobile/pages/pagina-inicial-1.png'
import imgTablet from '@/assets/tablet/pages/pagina-inicial.png'
import imgDesktop from '@/assets/desktop/pages/pagina-inicial.png'
import CardsList from '@/components/CardsList'

// funções
import shuffleArray from '@/utils/shuffleArray'
import { useMemo, useState } from 'react'

// json
import products from '@/json/products.json'

// tipagens externas
import { IProduct } from '@/interfaces/IProduct'

const Home = () => {
    // states
    const [homeProducts, setHomeProducts] = useState<IProduct[]>([])

    // da imagem menor até a maior
    const imgs = [imgMobile, imgTablet, imgDesktop]

    // aleatoriza o array de produtos para mostrá-lo na página incial
    useMemo(() => {
        const productsArray = [...products]
        const randomProducts = shuffleArray(productsArray.splice(0, 6))
        setHomeProducts(randomProducts)
    }, [])

    return (
        <>
            <Banner
                title='Classificados Tech'
                description='Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!'
                link={true}
                images={imgs}
                imageAlt='Imagem de um smartwatch.'
            />
            <CategoriesList />
            <CardsList homeProducts={homeProducts} products={products} cart={false} />
        </>
    )
}

export default Home
