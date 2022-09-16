/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style/index.scss'
import {Link} from 'react-router-dom'
export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cadastro">Cadastrar</Link></li>
            </ul>
        </nav>
    );
}

