import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'; 

import './styles.css'

interface PageHeaderProps {
    title: string; //obrigatório, para n ser obrigatório precisa por um title?
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar para landing page" />
                </Link>
                <img src={logoImg} alt="Logo proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;