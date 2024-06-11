import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite pizza here</h2>
        <p>You will create your favourite pizza from elements array below. First choose your favourite type of pizza. Second choose size this. Finally, you add topping. Yes this is pizza of your.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
