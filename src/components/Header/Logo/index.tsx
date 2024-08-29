// componentes
import { Link } from 'react-router-dom'

// imagens
import logo from '@/assets/logo/tratotech-white.png'

// tipagem dos props
interface LogoProps {
    type: 'desktop' | 'others'
    isFixed: boolean
}

const Logo = ({ type, isFixed }: LogoProps) => {
    return (
        <h1>
            <Link to='/' aria-label='Página inicial'>
                <img
                    src={logo}
                    alt='Logo da Trato Tech'
                    className={`mx-auto lg:mb-0 xl:m-0 ${
                        type === 'desktop' ? 'hidden lg:block' : 'lg:hidden'
                    }
                    ${isFixed ? 'mb-0' : 'mb-5'}
                    `}
                />
            </Link>
        </h1>
    )
}

export default Logo
