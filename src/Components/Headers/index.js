import React from 'react';
import { Main_Logo } from '../../Utils/images'
import './index.css'
export const Headers = () => {
    return (
        <div className="header-container">
            <a href="#"><img className="main-logo" alt="stack overflow" src={Main_Logo}></img></a>
        </div>
    )
}