import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = (value:number) => {
        setCount(count + value)
    }
  return (
    <div>
        <Header >
            <div>Child Counter Header</div>
            <div>Child Counter Header</div>
            <div>Child Counter Header</div>
        </Header>
        <Header label={`${count}`}></Header>
        <Button label="ADD" handleClick={() => handleClick(1)}></Button>
        <Button label="REDUCE"handleClick={() => handleClick(-1)}></Button>
    </div>
  )
}

export default Counter