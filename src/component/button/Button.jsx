import React from 'react';

const Button = ( props ) => {
    const { onClickHandler } = props;

    return (
        <div onClick={ onClickHandler }>{ props.children }</div>
    )
}

export default Button;