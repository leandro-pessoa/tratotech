const ProductNotFound = () => {
    return (
        <div className='my-14 center flex-col'>
            <h2 className='common-text text-xl lg:text-2xl mb-10'>
                Nenhum produto foi encontrado
            </h2>
            <span className='common-text mx-5 text-center text-sm sm:text-base'>
                A sua pesquisa não retorna nenhum produto.
            </span>
        </div>
    )
}

export default ProductNotFound
