// componentes
import { Link } from 'react-router-dom'

// ícones
import { FaUserAltSlash } from 'react-icons/fa'

// estilos
import './styles.css'

const User = () => {
    return (
        <section className='alternative-bg-colors common-text center flex-col gap-10 py-10'>
            <FaUserAltSlash className='text-3xl sm:text-5xl lg:text-6xl'/>
            <h2 className='text-xl md:text-2xl xl:text-3xl'>
                Você não realizou o login
            </h2>
            <span className='sub-text'>
                Faça o login da sua conta{' '}
                <Link to='' className='link'>
                    aqui
                </Link>
                .
            </span>
            <span className='sub-text'>
                Não está cadastrado?{' '}
                <Link to='' className='link'>
                    Crie sua conta.
                </Link>
            </span>
        </section>
    )
}

export default User
