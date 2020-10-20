import React from "react"
import { Icon } from "Components/Icons/Icons"
import { Link } from "react-router-dom"
import "./BottomNav.css"
import { Ripple } from "Common/ripple"

interface Props {
    to: string
    icon: string
    ripple?: boolean
}

export const NavLink: React.FC<Props> = ({to, icon, ripple, children}) => {
    return (
        <Link to={to} className="navlink" onClick={ripple ? Ripple : undefined}>
            <Icon svg={icon} />
            {children}
        </Link>
    )
}