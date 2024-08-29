// funções
import { useAppDispatch } from '@/features/hooks'
import { clearCart } from '@/features/reducers/cart'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const FinishShopping = () => {
    const dispatch = useAppDispatch()

    // função de navegacao
    const navigate = useNavigate()

    // finaliza a compra
    const finishHandle = () => {
        navigate('/')
        toast.success('Obrigado pela compra!')
        dispatch(clearCart())
    }

    return (
        <div className='w-full flex sm:justify-end'>
            <button
                className='bg-tech-900 dark:bg-tech-500 rounded-full py-3 px-10 mt-5 w-full sm:w-auto sm:float-right lg:text-xl'
                onClick={finishHandle}
            >
                Finalizar compra
            </button>
        </div>
    )
}

export default FinishShopping
