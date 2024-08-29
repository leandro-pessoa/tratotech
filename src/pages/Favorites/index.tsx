// componentes
import Banner from '@/components/Banner'
import CardsList from '@/components/CardsList'
import Empty from '@/components/Empty'

// funções
import { useAppSelector } from '@/features/hooks'

// states globais
import { selectFavoritesList } from '@/features/reducers/favorites'

const Favorites = () => {
    // lista de favoritos global
    const favoritesList = useAppSelector(selectFavoritesList)

    return (
        <>
            <Banner
                title='Favoritos'
                description='Veja abaixo tudo que você salvou para ver depois!'
            />
            {favoritesList.length >= 1 ? (
                <CardsList products={favoritesList} cart={false} />
            ) : (
                <Empty
                    title='Nenhum item foi adicionado aos favoritos'
                    text='Adicione algum item aos favoritos em alguma das categorias abaixo:'
                />
            )}
        </>
    )
}

export default Favorites
