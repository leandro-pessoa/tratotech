// realiza o teste com expressão regular
const regexTest = (name: string, searchValue: string) => {
    const regex = new RegExp(searchValue, 'i')
    return regex.test(name)
}

export default regexTest