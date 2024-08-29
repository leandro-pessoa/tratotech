// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import { addFavorite, removeFavorite } from '@/features/reducers/favorites'

// ícones
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

// states globais
import { selectFavoritesList } from '@/features/reducers/favorites'

// tipagem dos props
interface FavoriteBtnProps {
    id: string
    name: string
    description: string
    price: number
    image: string
}

const FavoriteBtn = ({
    id,
    name,
    description,
    price,
    image,
}: FavoriteBtnProps) => {
    const dispatch = useAppDispatch()

    // itens que foram adicionados aos favoritos
    const favoritesList = useAppSelector(selectFavoritesList)

    // lista de ids dos itens adicionados ao carrinho
    const favoritesIds = favoritesList.map((favorite) => favorite.id)

    // verifica se o item ja esta adicionado na lista de favoritos
    const notIncludes = !favoritesIds.includes(id)

    // adiciona ou retira o item da lista de favoritos
    const addOrRemoveToFavorite = () => {
        if (notIncludes) {
            // produto atual
            const product = {
                id,
                name,
                description,
                price,
                image,
            }

            // dispatch, que fará a inserção ou remoção do item da lista de favoritos
            dispatch(addFavorite(product))
        } else {
            // dispatch da remocao do item da lista de favoritos
            dispatch(removeFavorite(id))
        }
    }

    return (
        <button className='favorite-cart' onClick={addOrRemoveToFavorite} aria-label={notIncludes ? 'Adicionar aos favoritos' : 'Remover dos favoritos'}>
            {notIncludes ? (
                <StarIcon className='icon icon--dark' />
            ) : (
                <StarIconSolid className='icon text-yellow-500 dark:text-yellow-400' />
            )}
        </button>
    )
}

export default FavoriteBtn
