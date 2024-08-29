// funções
import { useLayoutEffect } from 'react'

// ícones
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

const ThemeButton = () => {
    // encurtador para o classList do documento
    const documentClassList = document.documentElement.classList

    // altera o tema do site
    const toggleTheme = () => {
        if (documentClassList.contains('dark')) {
            documentClassList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
            documentClassList.add('dark')
        }
    }

    // determina o tema de acordo com o sistema operacional do usuário
    const systemPreference = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches
    useLayoutEffect(() => {
        systemPreference &&
            localStorage.getItem('theme') === 'dark' &&
            documentClassList.add('dark')
        document.body.classList.add('bg-pattern')
    })

    return (
        <button
            onClick={toggleTheme}
            className='icon sm:absolute sm:top-[20px] sm:right-5 lg:static'
            aria-label='Tema'
        >
            <SunIcon className='block dark:hidden icon' />
            <MoonIcon className='hidden dark:block icon' />
        </button>
    )
}

export default ThemeButton
