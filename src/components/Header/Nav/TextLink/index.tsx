// componentes
import LinkNav from "../LinkNav"

// tipagem dos props
interface TextLinkProps {
    children: string
}

const TextLink = ({ children }: TextLinkProps) => {
    return (
        <LinkNav
            to='/'
            activeStyles='current-text-link'
            defaultStyles='text-link'
        >
            {children}
        </LinkNav>
    )
}

export default TextLink