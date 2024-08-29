// funções
import { useAppDispatch } from '@/features/hooks'

// actions
import { setVerticalNav } from '@/features/reducers/header'

// ícones
import { Bars3Icon } from '@heroicons/react/24/solid'

const VerticalNavBtn = () => {
    const dispatch = useAppDispatch()

    return (
        <button onClick={() => dispatch(setVerticalNav(true))} aria-label='Menu lateral'>
            <Bars3Icon className='sm:hidden icon' />
        </button>
    )
}

export default VerticalNavBtn
