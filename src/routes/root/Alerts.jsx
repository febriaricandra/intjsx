import React, { useState } from 'react'
import Alert from '../../components/Alert'
import Button from '../../components/Button'

export default function Alerts() {
  const [open, setOpen] = useState(false)
  const clickAlert = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }
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
      <h2 className='mb-4 text-lg font-semibold text-gray-200'>Pop up Alert</h2>
      <div className="flex flex-col">
        <div className="inline-flex">
          <Button intent="primary" onClick={clickAlert}>Click Alert</Button>
        </div>
      </div>

      <div className="my-10"></div>
      {open ?
        <div className="fixed mx-auto my-0 bottom-4">
          <Alert intent={'info'} title={'This is an info alert — check it out!'} />
        </div>
        : null}
        <div className="my-12"></div>
    </div>
  )
}
