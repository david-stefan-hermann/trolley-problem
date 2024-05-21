import React from 'react'
import { FaGithub } from "react-icons/fa"


const Footer = () => {
    return (
        <>
            <footer className="font-medium max-w-3xl text-center mx-auto p-4 h-20">
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
        </>
    )
}

export default Footer
