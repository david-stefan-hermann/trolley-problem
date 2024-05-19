import React from 'react'

const Buttons = ({ children }) => (
    <div className="flex gap-2 justify-center fixed bottom-0 bg-white px-4 py-4 md:py-0 w-full left-0 space-x-0 md:relative">
        {children}
    </div>
)

export default Buttons
