import React from 'react'

const Button = ({ onClick, children }) => (
    <button
        className="font-bold bg-white text-black border-2 border-black py-2 px-2 rounded-lg transform hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
