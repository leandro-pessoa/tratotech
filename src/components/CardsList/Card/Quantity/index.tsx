// ícones
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

// funções
import { useAppDispatch } from '@/features/hooks'
import { addQuantity, removeQuantity } from '@/features/reducers/cart'

// tipagem dos props
interface QuantityProps {
    id: string
    cart: boolean
    quantity: number
}

const Quantity = ({ id, cart, quantity }: QuantityProps) => {
    const dispatch = useAppDispatch()

    return (
        <div className={`${cart && 'my-3'} center gap-5`}>
            Quantidade
            <button
                className='minus-add'
                onClick={() => dispatch(removeQuantity(id))}
                aria-label='Remover quantidade em 1'
            >
                <MinusIcon className='icon' />
            </button>
            <span className='w-5 text-center'>{String(quantity).padStart(2, '0')}</span>
            <button
                className='minus-add'
                onClick={() => dispatch(addQuantity(id))}
                aria-label='Adicionar quantidade em 1'
            >
                <PlusIcon className='icon' />
            </button>
        </div>
    )
}

export default Quantity
