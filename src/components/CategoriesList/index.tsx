// componentes
import CategoryCard from './CategoryCard'

// json
import categories from '@/json/categories.json'

// tipagem dos props
interface CategoriesListProps {
    titleColor?: string
}

const CategoriesList = ({ titleColor = '' }: CategoriesListProps) => {
    return (
        <section className='alternative-bg-colors mt-44 xl:mt-52 h-[650px] xl:h-[250px]'>
            <div className='-translate-y-48 xl:-translate-y-56'>
                <h2 className={`${titleColor} text-center text-2xl md:text-2xl lg:text-3xl py-8`}>
                    Categorias
                </h2>
                <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-y-6 gap-x-3 md:gap-x-6 max-w-sm sm:max-w-lg md:max-w-xl xl:max-w-[80%] mx-auto'>
                    {categories.map((category) => (
                        <CategoryCard {...category} key={category.title} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

// 

export default CategoriesList
