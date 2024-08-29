// componentes
import Nav from './Nav'
import Logo from './Logo'
import VerticalNav from './VerticalNav'

// funções
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/features/hooks'

// states globais 
import { selectSearchPosition, selectVerticalNav, setVerticalNav } from '@/features/reducers/header'

// actions
import { setSearchPosition } from '@/features/reducers/header'

const Header = () => {
    // states
    const dispatch = useAppDispatch()
    const [headerPosition, setHeaderPosition] = useState<'relative' | 'fixed'>('relative')
    const [scrollPos, setScrollPos] = useState<number>(0)
    const searchPosition = useAppSelector(selectSearchPosition)
    const verticalNavDisplay = useAppSelector(selectVerticalNav)

    // obtem a altura atual do header
    // ou retorna 214px caso seja 'undefined'
    const headerHeight =
        document.querySelector('header')?.getBoundingClientRect().height || 214

    // quando ocorre um 'scroll up', o header fica fixed
    // quando ocorre um 'scroll down', o header fica na posicao normal
    window.addEventListener('scroll', () => {
        // posicao atual na tela
        const yPosition = window.scrollY
        if (yPosition > headerHeight) {
            // detecta o novo estado e o compara com a nova posicao da tela
            if (document.body.getBoundingClientRect().top > scrollPos) {
                setHeaderPosition('fixed')
            } else {
                setHeaderPosition('relative')
            }
            // salva a nova posicao para a proxima iteracao
            setScrollPos(document.body.getBoundingClientRect().top)
        } else {
            // caso o usuario esteja no topo da tela, o header voltara ao seu estado normal (relative)
            setHeaderPosition('relative')
            dispatch(setSearchPosition(false))
        }

        // esconde o nav vertical, caso esteja aberto
        if(verticalNavDisplay) {
            dispatch(setVerticalNav(false))
        }
    })

    // verifica se o header está em posição fixa ou se uma pesquisa estiver ocorrendo, e retorna um booleano
    const isFixed = headerPosition === 'fixed' || searchPosition

    return (
        <header className='h-[214px] lg:h-[114px]'>
            <div
                className={`
                    ${
                        isFixed &&
                        'fixed left-0 right-0 bg-pattern bg-colors z-10 pb-2 pt-0 lg:pt-2 shadow-lg animate-slide-down'
                    }
                    py-5 xl:px-[60px]
                `}
            >
                <Logo type='others' isFixed={isFixed} />
                <Nav />
                {verticalNavDisplay && <VerticalNav />}
            </div>
        </header>
    )
}

export default Header
