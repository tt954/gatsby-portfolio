import React from 'react'

const Project = ({ title, ghlink, livelink, description, technologies, imgSrc }) => {
    return (
        <li className="card__project">
            <h3>{title}</h3>
        </li>
    )
}

export default Project
