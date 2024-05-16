import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen p-4">
            <header className="w-full max-w-3xl text-center mx-auto mb-4">
                <h1 className="text-4xl font-bold mb-2">Das Trolley Problem für autonomes Fahren</h1>
            </header>
            <main className="flex-grow flex flex-col items-center w-full">
                {children}
            </main>
            <footer className="font-medium w-full max-w-3xl text-center mx-auto mt-8 p-4">
                <span className="text-1xl">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://neal.fun/absurd-trolley-problems/'>neal.fun</a>
                    {' '} &#x2013; {' '}
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://www.chatgpt.com'>ChatGPT</a>
                    {' '} &#x2013; {' '}
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://vitejs.dev/guide/'>Vitejs</a>
                    {' '} &#x2013; {' '}
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='https://tailwindcss.com/docs'>Tailwind CSS</a>
                </span>
                <p className="text-1xl">von 2024 Karo, Philipp und David</p>
            </footer>
        </div>
    )
}

export default Layout
