// componentes
import TextLink from '../Nav/TextLink'

// funções
import { useAppDispatch } from '@/features/hooks'
import { setVerticalNav } from '@/features/reducers/header'

// ícones
import { XMarkIcon } from '@heroicons/react/24/outline'

// estilos
import './styles.css'

const VerticalNav = () => {
    const dispatch = useAppDispatch()

    return (
        <div className='fixed top-0 left-0 h-[100vh] sm:relative sm:h-auto sm:bg-transparent sm:hidden flex w-[100vw] shadow-lg z-20'>
            <div className='backdrop-blur-sm w-[60%] h-full p-5'>
                <button onClick={() => dispatch(setVerticalNav(false))}>
                    <XMarkIcon className='icon' />
                </button>
                <ul className='center flex-col gap-5 overflow-auto mt-10'>
                    <li className='vertical-li-text-link mt-10'>
                        <TextLink>Página inicial</TextLink>
                    </li>
                </ul>
            </div>
            <div
                className='h-full w-[40%]'
                onClick={() => dispatch(setVerticalNav(false))}
            ></div>
        </div>
    )
}

export default VerticalNav
