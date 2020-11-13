import React from 'react';
import './Button.css';

const Button = ( props ) => {
    const { onClickHandler } = props;

    return (
        <div className="menuButton" onClick={ onClickHandler }><p className="button" >{ props.children }</p></div>
    )
}

export default Button;