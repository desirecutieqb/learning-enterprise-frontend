import React from 'react'

function Header({title,subtitle,rightElement}: HeaderProps) {
  return (
    <div className='header'>
        <div className="">
            <h1 className="header__title">{title}</h1>
            <p className="header__subtitle">
                {subtitle}
            </p>
        </div>
        {rightElement && <div>{rightElement}</div>}
    </div>
  )
}

export default Header