import React from 'react'
import { cva } from 'class-variance-authority'

function Modal() {
    const modal = cva("modal", {
        variants: {
          intent: {
            primary: [

            ],
            secondary: [

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
    <div>Modal</div>
  )
}

export default Modal