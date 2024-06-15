import React from 'react'
import qr_code from '../../assets/cm.avernus.cloud.png'

const QrDisplay = ({ hideQrCode }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-20 opacity-90">
            <div className='w-full max-w-xl'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center">cm.avernus.cloud</h1>
                <img
                    src={qr_code}
                    alt="QR Code"
                    className="w-full"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center">cm.avernus.cloud</h1>
            </div>

            <button
                onClick={hideQrCode? hideQrCode : () => {}}
                className="z-40 bg-gray-500 hover:bg-gray-600 text-white h-8 px-4 mr-3 mt-8 rounded"
            >
                zurück
            </button>
        </div>
    )
}

export default QrDisplay