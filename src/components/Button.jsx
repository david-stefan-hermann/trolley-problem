import React from 'react'

const Button = ({ onClick, children }) => (
    <button
        className="font-bold bg-white text-black border-2 border-black py-2 px-2 rounded-lg bg-white transform betterhover:hover:bg-black betterhover:hover:text-white transition-colors duration-300 ease-in-out active:scale-95 active:bg-gray-300"
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
