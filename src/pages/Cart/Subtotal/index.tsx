// estilos 
import './styles.css'

// funções
import { useAppSelector } from '@/features/hooks'
import formattedPrice from '@/utils/formattedPrice'

// states globais
import { selectCartProducts } from '@/features/reducers/cart'

const Subtotal = () => {
    // todos os produtos adicionados ao carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    // resultado final (será somado)
    let subtotal = 0

    for(const i in cartProducts) {
        // realiza o cálculo do valor total
        subtotal += cartProducts[i].product.price * cartProducts[i].quantity
    }

    return (
        <div className='bg-tech-100 dark:bg-tech-900 common-text shadow-md p-5 flex flex-col gap-5 sm:flex-row sm:justify-between'>
            <h2 className='text-center font-size font-medium'>
                Resumo da compra
            </h2>
            <div className='flex flex-col gap-5 sm:flex-col-reverse'>
                <form className='text-center'>
                    <label htmlFor='frete' className='mr-3 md:text-lg xl:text-xl'>
                        Frete:
                    </label>
                    <input
                        type='text'
                        id='frete'
                        autoComplete='off'
                        placeholder='Insira o seu CEP'
                        className='input lg:text-lg'
                    />
                </form>
                <span className='text-center block font-size md:text-xl '>
                    Subtotal: <span className='font-semibold text-tech-900 dark:text-tech-100'>{formattedPrice(subtotal)}</span>
                </span>
            </div>
        </div>
    )
}

export default Subtotal
