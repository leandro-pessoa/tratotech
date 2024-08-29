// componentes
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

// tipagem dos props
interface LinkNavProps {
    to: string
    children: string | ReactElement | (ReactElement | string)[]
    activeStyles: string
    defaultStyles?: string
    label: string
}

const LinkNav = ({
    to,
    children,
    activeStyles,
    defaultStyles,
    label
}: LinkNavProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${defaultStyles} ${isActive ? activeStyles : ''}`
            }
            aria-label={label}
        >
            {children}
        </NavLink>
    )
}

export default LinkNav
