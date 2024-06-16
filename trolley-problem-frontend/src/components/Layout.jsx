import React from 'react'
import Footer from './Footer'
import { useLocation, Link } from 'react-router-dom'


const Layout = ({ children }) => {
    const location = useLocation()
    const showFooter = ['/dashboard'].includes(location.pathname)
    const showBackToDashboard = ['/spin'].includes(location.pathname)

    return (
        <div className="flex flex-col min-h-screen p-4 font-playpen">
            {
                showBackToDashboard && <Link to='/dashboard' className='text-blue-500 text-center pb-2 hover:text-blue-700'>&lt; Zurück zum Dashboard</Link>
            }

            <header className="w-full max-w-3xl text-center mx-auto mb-1 md:mb-3">
                <h1 className="text-2xl md:text-4xl font-bold">Das Trolley Problem für autonomes Fahren</h1>
            </header>
            <main className="flex-grow flex flex-col items-center w-full">
                {children}
            </main>

            <div className="flex w-full mb-4"></div>

            <div className={`md:block ${showFooter ? '' : 'hidden'}`}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
