// estilos
import './styles.css'

// componentes
import Quantity from './Quantity'
import RemoveBtn from './RemoveBtn'

// funções
import formattedPrice from '@/utils/formattedPrice'
import FavoriteBtn from './FavoriteBtn'
import CartBtn from './CartBtn'

// tipagem dos props
interface CardProps {
    id: string
    name: string
    description: string
    price: number
    image: string
    cart: boolean
    quantity?: number
}

const Card = ({
    id,
    name,
    description,
    price,
    image,
    cart,
    quantity,
}: CardProps) => {
    // props para as actions de favoritar e salvar
    const actionsProps = { id, name, description, price, image }

    return (
        <li
            className={`bg-tech-100 dark:bg-tech-900 common-text shadow-md relative pb-20 ${
                cart && 'pb-36'
            }`}
        >
            {cart && <RemoveBtn id={id} />}
            <img src={image} alt={name} className='w-full' />
            <div className='px-5'>
                <h3 className='text-tech-500 font-bold text-lg md:text-xl my-3 sm:my-4 text-start'>
                    {name}
                </h3>
                <p className='text-xs sm:text-base'>{description}</p>
            </div>
            <div
                className={`flex ${
                    cart && 'flex-col'
                } absolute bottom-0 right-0 left-0`}
            >
                <span
                    className={`${
                        cart && 'w-fit'
                    } bg-tech-500 text-gray-100 py-4 px-4 sm:px-7 text-sm sm:text-base`}
                >
                    {formattedPrice(price)}
                </span>
                {cart && quantity ? (
                    <Quantity cart={cart} quantity={quantity} id={id} />
                ) : (
                    <div className='w-full flex justify-around items-center'>
                        <FavoriteBtn {...actionsProps} />
                        <CartBtn {...actionsProps} />
                    </div>
                )}
            </div>
        </li>
    )
}

export default Card
