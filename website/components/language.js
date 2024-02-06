"use client"
import { useState } from 'react'

export default function Language({ children, text }) {
    const [height, setheight] = useState('h-0')
    const [ic, cic] = useState('fa-solid fa-angle-up')
    return (
        <div className="bg-gradient-to-r from-emerald-800 to-gray-900 md:w-3/4 mx-auto p-10">
            <div className="flex flex-row">
                <i className="fa-brands fa-python m-5 text-5xl text-emerald-100"></i>
                <div className="text-emerald-300 text-left w-full m-5">
                    <h1 className="text-5xl w-full text-left mb-5">Python</h1>
                    <p className="text-lg">
                        {text}
                    </p>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    if (height == 'h-0') {
                        setheight('h-fit')
                        cic('fa-solid fa-angle-down')
                    } else {
                        setheight('h-0')
                        cic('fa-solid fa-angle-up')
                    }
                }} ><i className={`${ic} text-emerald-200 duration-100`}></i></button>
                <div id="someID" className={`grid ${height} duration-200 transitions overflow-y-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10`}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}