// componentes
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    // tamanho dos ícones
    const iconSize = 22

    return (
        <footer className='flex flex-col md:flex-row justify-center md:justify-between items-center py-7 gap-3 md:px-10 xl:px-[15%]'>
            <div className='flex justify-center md:justify-start w-full md:w-fit gap-10'>
                <a href='https://github.com/leandro-pessoa' hrefLang='pt-br' rel='external' target='_blank' aria-label='Github'>
                    <FaGithub size={iconSize} className='icon' />
                </a>
                <a href='#' hrefLang='pt-br' rel='external' target='_blank' aria-label='Facebook'>
                    <FaFacebook size={iconSize} className='icon' />
                </a>
                <a href='#' hrefLang='pt-br' rel='external' target='_blank' aria-label='X'>
                    <FaXTwitter size={iconSize} className='icon' />
                </a>
                <a href='#' hrefLang='pt-br' rel='external' target='_blank' aria-label='Instagram'>
                    <FaInstagram size={iconSize} className='icon' />
                </a>
            </div>
            <p>Desenvolvido por Leandro Pessoa.</p>
        </footer>
    )
}

export default Footer
