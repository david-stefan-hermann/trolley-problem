import React from 'react'
import { FaGithub } from "react-icons/fa"


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

            <footer className="hidden md:block font-medium max-w-3xl text-center mx-auto p-4 h-20">
                <span className="text-1xl">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://neal.fun/absurd-trolley-problems/'>neal.fun</a>
                    {' '} &#x2013; {' '}
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://vitejs.dev/guide/'>Vitejs</a>
                    {' '} &#x2013; {' '}
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://tailwindcss.com/docs'>Tailwind CSS</a>
                </span>
                
                <p>
                    <FaGithub className='inline mr-1 align-baseline' />
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://github.com/david-stefan-hermann/trolley-problem'>David Hermann</a>
                    , Karo, Philipp
                </p>
            </footer>
        </div>
    )
}

export default Layout
