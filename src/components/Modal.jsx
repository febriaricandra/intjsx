import React from 'react'
import { cva } from 'class-variance-authority'
import { X } from 'lucide-react';

function Modal() {
    const modal = cva("w-full px-6 py-4 overflow-hidden", {
        variants: {
          intent: {
            primary: [
                "bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl"
            ],
            secondary: [
                "bg-black rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl"
            ],
          },
          size: {

          },
        },
        compoundVariants: [

        ],
        defaultVariants: {

        },
      });
  return (
    <div className='w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl'>
        <header className='flex justify-end'>
            <button className='inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700'>
                <X size={24} />
            </button>
        </header>
        <div className="mt-4 mb-6">
            <p className='mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Modal Header
            </p>
            <p className='text-sm text-gray-700 dark:text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore!
            </p>
        </div>
        <footer className='flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800'>
            <button className='w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'>
                cancel
            </button>
            <button className='w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'>
                Accept
            </button>
        </footer>
    </div>
  )
}

export default Modal