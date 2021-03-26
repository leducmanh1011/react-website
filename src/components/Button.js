import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYPES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYPES.includes(buttonStyle)
    ? buttonStyle
    : STYPES.first;
  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES.first

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  )
}
