import React from "react"
import "./Icons.css"

interface IconProps {
    svg: string
}

export const Icon: React.FC<IconProps> = ({svg}) => {
    return (
        <div className="icon-wrapper">
            <img className="link-icon" src={svg} alt=""/>
        </div>
    )
}
