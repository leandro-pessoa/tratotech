// json
import products from '@/json/products.json'

// tipagens externas
import { IProduct } from '@/interfaces/IProduct'

const filterProducts = (category: IProduct['category']) => {
    // filtragem dos produtos pela categoria definida no parâmetro
    const filteredProducts = products.filter(
        (product) => product.category === category
    )
    return filteredProducts
}

export default filterProducts