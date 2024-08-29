// ícones
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// states globais
import { selectSearchValue } from '@/features/reducers/search'

// actions
import { setSearchValue } from '@/features/reducers/search'
import { setSearchPosition } from '@/features/reducers/header'

const Search = () => {
    const dispatch = useAppDispatch()

    // caminho atual na url
    const { pathname } = useLocation()

    // state global de pesquisa
    const searchValue = useAppSelector(selectSearchValue)

    // realiza o scroll para a posicao da lista de produtos
    const scrollToCardsList = () => {
        const cardsList = document.querySelector('#cards-list')
        
        // o scroll so ocorrera caso a lista de cards exista
        if (cardsList) {
            dispatch(setSearchPosition(true))
            // altura do header
            let headerHeight = 170
    
            // caso a tela tenha 1024px ou mais, o header tera um tamanho menor
            if(window.document.documentElement.offsetWidth >= 1024) headerHeight = 114
    
            // caso haja uma lista de cards, o scroll é feito  
            if (cardsList) {
                const cardsListYPosition =
                    cardsList.getBoundingClientRect().top + window.scrollY
                window.scrollTo(0, cardsListYPosition - headerHeight)
            }
        }
    }

    // apaga a busca quando o usuario muda de rota
    useEffect(() => {
        dispatch(setSearchValue(''))
    }, [pathname, dispatch])

    return (
        <div className='rounded-md w-[90%] sm:w-[55%] lg:w-full shadow-md placeholder:text-sm placeholder:text-tech-900 bg-gray-100 relative'>
            <input
                type='search'
                className='peer/search w-full input lg:pl-3'
                placeholder='O que você procura?'
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                onFocus={scrollToCardsList}
                onBlur={() => dispatch(setSearchPosition(false))}
            />
            <span className='absolute right-3 top-[5px] peer-focus/search:hidden'>
                <MagnifyingGlassIcon className='text-black h-5' />
            </span>
        </div>
    )
}

export default Search
