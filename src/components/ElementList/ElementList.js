import React from 'react';

export default function ElementList({ children, description }) {
    return (
        <>
            <h4>{description}</h4>
            <li>
                {children}
            </li>
        </>
    )
}
