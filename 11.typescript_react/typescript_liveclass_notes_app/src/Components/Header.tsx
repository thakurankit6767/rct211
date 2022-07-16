import React from 'react'

interface IHeaderProps {
    label? : string;
    // children?: JSX.Element;
    children?: JSX.Element | JSX.Element[]
}

const Header = ({label = "Counter",children} : IHeaderProps) => {
    return(
    <>
         <h1>{label}</h1>
         {children}
    </>
    )
}

export default Header