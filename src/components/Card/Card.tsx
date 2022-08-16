import React from 'react';
import style from './Card.module.scss';

type TCard = {
    children: React.ReactNode;
    className?: string;
};

const Card: React.FC<TCard> = ({ children, className }) => {
    return <div className={`${style.card} ${className}`}>{children}</div>;
};

export default Card;
