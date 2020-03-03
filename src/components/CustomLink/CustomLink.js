import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomLink({ children, path }) {
    return (
        <Link to={path}>
            <li>
                {children}
            </li>
        </Link>
    )
}
