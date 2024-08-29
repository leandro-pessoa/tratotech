// cria um novo cookie
const createCookie = (key: string, value: string) => {
    // data em que o cookie ira expirar
    // 7000 = 7 dias
    const expires = new Date(Date.now() + 86400 * 7000).toUTCString()

    document.cookie = `${key}=${value};expires=${expires} ; Secure`
}

// obtem os valores do cookie passado como parametro
const getCookie = (key: string) => {
    return document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith(`${key}=`))
        ?.split('=')[1]
}

// remove um cookie
const removeCookie = (key: string) => {
    document.cookie = `${key}=; expires=Thu 01 Jan 1970 00:00:00`
}

export { createCookie, getCookie, removeCookie }
