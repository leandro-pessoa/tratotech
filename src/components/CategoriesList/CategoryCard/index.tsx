// componentes
import { Link } from 'react-router-dom'

// tipagem dos props
interface CategoryCardProps {
    title: string
    url: string
    homeMobileImg: string
    homeTabletImg: string
    homeDesktopImg: string
}

const CategoryCard = ({
    title,
    url,
    homeMobileImg,
    homeTabletImg,
    homeDesktopImg,
}: CategoryCardProps) => {
    return (
        <li className='flex flex-col items-center lg:hover:scale-110 transition-all text-center'>
            <Link to={`/categorias/${url}`} className='peer'>
                <picture>
                    <source
                        srcSet={homeDesktopImg}
                        media='(min-width: 1280px)'
                    />
                    <source srcSet={homeTabletImg} media='(min-width: 640px)' />
                    <img src={homeMobileImg} alt={`Categoria ${title}`} />
                </picture>
                <br/>
                <span className='common-text'>{title}</span>
            </Link>
        </li>
    )
}

export default CategoryCard
