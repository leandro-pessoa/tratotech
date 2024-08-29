// ícones
import { StarIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'

// componentes
import Search from '../Search'
import Logo from '../Logo'
import LinkNav from './LinkNav'
import TextLink from './TextLink'
import ThemeButton from '../ThemeButton'
import CartIcon from './CartIcon'
import VerticalNavBtn from './VerticalNavBtn'

// estilos
import './styles.css'

const Nav = () => {
    return (
        <nav>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                <li className='hidden lg:block'>
                    <Logo type='desktop' isFixed={false} />
                </li>
                <li className='li-text-link'>
                    <TextLink>Página inicial</TextLink>
                </li>
                <li className='flex justify-around sm:justify-around items-center lg:order-last'>
                    <VerticalNavBtn />
                    <LinkNav to='/favoritos' activeStyles='current-icon' label='Favoritos'>
                        <StarIcon className='icon' />
                    </LinkNav>
                    <LinkNav
                        to='/carrinho'
                        defaultStyles='relative'
                        activeStyles='current-icon'
                        label='Carrinho'
                    >
                        <CartIcon />
                    </LinkNav>
                    <LinkNav to='/usuario' activeStyles='current-icon' label='Usuário'>
                        <UserCircleIcon className='icon' />
                    </LinkNav>
                    <ThemeButton />
                </li>
                <li className='col-span-5 lg:col-span-1 lg:order-1 center mt-5 lg:mt-0'>
                    <Search />
                </li>
            </ul>
        </nav>
    )
}

export default Nav
