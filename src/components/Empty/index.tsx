// componentes
import CategoriesList from "../CategoriesList"

// tipagem dos props 
interface EmptyProps {
    title: string
    text: string
}

const Empty = ({ title, text }: EmptyProps) => {
    return (
        <section className='alternative-bg-colors py-5 px-10'>
            <h2 className='text-tech-800 dark:text-tech-100 my-10 text-lg font-semibold text-center md:text-xl lg:text-2xl'>
                {title}
            </h2>
            <span className='block mt-5 text-center text-sm common-text'>
                {text}
            </span>
            <CategoriesList titleColor='common-text' />
        </section>
    )
}
export default Empty