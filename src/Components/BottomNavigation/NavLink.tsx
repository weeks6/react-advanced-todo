import React from "react"
import { Link } from "react-router-dom"
import "./BottomNav.css"
import { Ripple } from "Common/ripple"

interface Props {
    to: string
    ripple?: boolean
}

export const NavLink: React.FC<Props> = ({to, ripple, children}) => {
    return (
        <Link to={to} className="navlink" activeClassName="active" onClick={ripple ? Ripple : undefined}>
            {children}
        </Link>
    )
}