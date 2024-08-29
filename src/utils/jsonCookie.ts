// funções
import { createCookie, getCookie, removeCookie } from './cookies'

// tipagens externas
import { ICartProduct } from '@/interfaces/ICartProduct'
import { IProduct } from '@/interfaces/IProduct'

// retorna uma lista com os produtos adicionados no cookie
const getParsedCookies = (cookie: string) => {
    return JSON.parse(getCookie(cookie) || '[]')
}

// adiciona itens ao cookie passado no parametro
const addInCookie = (newProduct: ICartProduct | IProduct, cookie: string) => {
    // gera um cookie com o primeiro produto, caso nao haja nenhum
    if (getParsedCookies(cookie).length === 0) {
        createCookie(cookie, JSON.stringify([newProduct]))
    } else {
        // gera um novo cookie com o novo produto adicionado
        const newProducts = [...getParsedCookies(cookie), newProduct]
        createCookie(cookie, JSON.stringify(newProducts))
    }
}

// remove itens do cookie passado no parametro
const removeInCookie = (id: string, cookie: string) => {
    // exclui o cookie por inteiro, caso o item removido seja o ultimo
    if (getParsedCookies(cookie)?.length === 1) {
        removeCookie(cookie)
    } else {
        let newCookiesArray
        // ira filtrar os produtos:
        if(cookie === 'cart') { // caso estejam no carrinho
            newCookiesArray = getParsedCookies(cookie)?.filter(
                (item: ICartProduct) => item.product.id !== id
            )
        } else { // caso nao estejam no carrinho
            newCookiesArray = getParsedCookies(cookie)?.filter(
                (product: IProduct) => product.id !== id
            )
        }
        // gera um novo cookie, removendo o item selecionado (pelo id)
        createCookie(cookie, JSON.stringify(newCookiesArray))
    }
}

export { getParsedCookies, addInCookie, removeInCookie }
