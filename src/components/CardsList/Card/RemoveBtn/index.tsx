// funções
import { useAppDispatch } from '@/features/hooks'
import { removeProduct } from '@/features/reducers/cart'

// ícones
import { XMarkIcon } from '@heroicons/react/24/solid'

// tipagem dos props
interface RemoveBtnProps {
    id: string
}

const RemoveBtn = ({ id }: RemoveBtnProps) => {
    const dispatch = useAppDispatch()

    return (
        <abbr title='Remover do carrinho'>
            <button
                onClick={() => dispatch(removeProduct(id))}
                className='absolute right-0 p-2 bg-tech-500'
                aria-label='Remover item do carrinho'
            >
                <XMarkIcon className='icon' />
            </button>
        </abbr>
    )
}

export default RemoveBtn