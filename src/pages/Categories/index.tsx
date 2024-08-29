// componentes
import Banner from '@/components/Banner'

// funções
import { useParams } from 'react-router-dom'
import filterProducts from '@/utils/filterProducts'

// json
import categories from '@/json/categories.json'
import CardsList from '@/components/CardsList'

// tipagens externas
import { ICategory } from '@/interfaces/ICategory'

const Categories = () => {
    // caminho atual na url
    const { category } = useParams()

    // seleção da categoria atual no json
    // ou categoria inexistente
    const categoryJson: ICategory = categories.find(
        (cat) => cat.url === category
    ) || {
        title: '',
        url: '',
        homeMobileImg: '',
        homeTabletImg: '',
        homeDesktopImg: '',
        pageMobileImg: '',
        pageTabletImg: '',
        pageDesktopImg: '',
        imgAlt: '',
    }

    // array filtrado com somente dispositivos
    const devicesProducts = filterProducts(categoryJson.url)

    // imagens usadas nas páginas
    const categoryImgs = [
        categoryJson?.pageMobileImg,
        categoryJson?.pageTabletImg,
        categoryJson?.pageDesktopImg,
    ]

    return (
        <>
            <Banner
                title={categoryJson?.title}
                description='Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!'
                link={true}
                images={categoryImgs}
                imageAlt={categoryJson?.imgAlt}
            />
            <CardsList products={devicesProducts} cart={false} />
        </>
    )
}

export default Categories
