import React from 'react'
import Alert from '../../components/Alert'

export default function Alerts() {
  return (
    <div className='container grid px-6 mx-auto'>
        <h1 className='my-6 text-2xl font-semibold text-white'>Alerts</h1>
        <h2 className='mb-4 text-lg font-semibold text-gray-200'>Overview Alert</h2>
        <div className="flex flex-col">
            <Alert intent={'info'} title={'This is an info alert — check it out!'} />
            <Alert intent={'error'} title={'This is an error alert — check it out!'} />
            <Alert intent={'success'} title={'This is an success alert — check it out!'} />
            <Alert intent={'warning'} title={'This is an warning alert — check it out!'} />
        </div>
    </div>
  )
}
