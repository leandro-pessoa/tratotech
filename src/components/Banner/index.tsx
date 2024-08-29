// componentes
import { Link } from 'react-router-dom'

// tipagem dos props
interface BannerProps {
    title?: string
    description: string
    link?: boolean
    images?: (string | undefined)[]
    imageAlt?: string
}

const Banner = ({
    title,
    description,
    link = false,
    images,
    imageAlt = 'Descrição da imagem',
}: BannerProps) => {
    return (
        <section
            className={`py-5 sm:py-10 text-center ${
                images && 'xl:flex xl:items-center xl:text-start xl:px-20'
            }`}
        >
            <div className={images && 'xl:w-[40%]}'}>
                <h2 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>
                    {title}
                </h2>
                <p
                    className={`font-light mx-10 mb-10 mt-7 text-sm sm:text-base ${
                        images && 'xl:ml-0'
                    }`}
                >
                    {description}
                </p>
                {link && (
                    <Link
                        to='/'
                        className='bg-tech-900 dark:bg-tech-500 py-3 px-3 text-sm sm:text-base sm:px-7 rounded-full lg:hover:bg-tech-800 dark:lg:hover:bg-tech-400'
                    >
                        Quero anunciar
                    </Link>
                )}
            </div>
            {images && (
                <picture>
                    <source srcSet={images[2]} media='(min-width: 1280px)' />
                    <source srcSet={images[1]} media='(min-width: 640px)' />
                    <img
                        src={images[0]}
                        alt={imageAlt}
                        className='mt-10 mx-auto'
                    />
                </picture>
            )}
        </section>
    )
}

export default Banner
