import { CustomImage } from '@/components/common/CustomImage'
import { Label } from '@/components/ui/label'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className='p-8 h-screen'>
            <div
                className='w-full h-full grid gap-8'
                style={{
                    gridTemplateColumns: 'calc((100% - 4rem) * 0.2) calc((100% - 4rem) * 0.4) calc((100% - 4rem) * 0.4)'
                }}
            >
                <div className='flex flex-col bg-gray-200 p-4'>
                    <div className='m-3'>
                        <div className='w-full aspect-square rounded-full'>
                            <CustomImage src={'/home/bio_pic.jpg'} className='w-full h-full object-contain rounded-full shadow-lg bg-secondary' />
                        </div>
                    </div>
                    <div className='text-center'>Zachary Cootes</div>
                    <div className='text-center'>Software Developer</div>

                    {/* resume link */}
                    {/* linkedIn link */}
                    {/* github link */}

                    <div className='flex flex-1 flex-col items-center w-full px-4 overflow-hidden'>
                        <div className='flex justify-center bg-blue-300 w-full h-40 rounded-md'>hello</div>
                    </div>
                </div>

                <div className='bg-gray-300 p-4 flex flex-col gap-4'>
                    <div className='flex-1 bg-blue-300 flex items-center justify-center rounded-md'>Bio</div>
                    <div className='flex-1 flex-col bg-blue-300 flex items-center justify-center rounded-md'></div>
                    <div className='flex-1 bg-blue-300 flex items-center justify-center rounded-md'>Hello</div>
                </div>
                <div className='bg-gray-300 p-4 flex flex-col gap-4'>
                    <div className='flex-1 bg-blue-300 flex items-center justify-center rounded-md'>Bio</div>
                    <div className='flex-1 flex-col bg-blue-300 flex items-center justify-center rounded-md'></div>
                    <div className='flex-1 bg-blue-300 flex items-center justify-center rounded-md'>Hello</div>
                    <div className='flex flex-col ml-8  items-start'>
                        <button className='my-4'>
                            <Link to='/projects'>Projects</Link>
                        </button>
                        <button className='my-4'>
                            <Link to='/about'>About</Link>
                        </button>
                        <button className='my-4'>
                            <Link to='/swimming'>Swimming</Link>
                        </button>
                        <button className='my-4'>
                            <Link to='/ascii-art'>Ascii Art</Link>
                        </button>
                        <button>
                            <Link className='my-8 px-4' to='/contact'>
                                Contact
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
