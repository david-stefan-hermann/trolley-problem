import React from 'react'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen p-4 font-playpen">
            <header className="w-full max-w-3xl text-center mx-auto mb-1 md:mb-3">
                <h1 className="text-2xl md:text-4xl font-bold">Das Trolley Problem für autonomes Fahren</h1>
            </header>
            <main className="flex-grow flex flex-col items-center w-full">
                {children}
            </main>

            <div className="flex w-full mb-4"></div>

            <Footer />
        </div>
    )
}

export default Layout
