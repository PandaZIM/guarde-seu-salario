import React, { Component } from 'react';

// import { Container } from './styles';

const Styles = [
    "btn--primary--solid"
]

export const ButtonComponent = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    return(
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}
