import React from "react";
import { cva } from "class-variance-authority";
import {Info} from 'lucide-react'
import {CheckSquare} from 'lucide-react'
import {AlertTriangle} from 'lucide-react'
import { Ban} from 'lucide-react'

function Alert({intent, title}) {
  const alert = cva(["relative my-4 block w-full text-base font-regular px-4 py-4 rounded-lg flex"], {
    variants: {
      intent: {
        info: [
            "bg-blue-700",
            "text-white",
            "drop-shadow-xl"
        ],
        error: [
            "bg-red-700",
            "text-white",
            "drop-shadow-xl"
        ],
        success: [
            "bg-green-700",
            "text-white",
            "drop-shadow-xl"
        ],
        warning: [
            "bg-yellow-700",
            "text-white",
            "drop-shadow-xl"
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

  const Icon = [
    {
        intent: "info",
        icon: <Info size={24} />,
    },
    {
        intent: "error",
        icon: <Ban size={24} />,
    },
    {
        intent: "success",
        icon: <CheckSquare size={24} />,
    },
    {
        intent: "warning",
        icon: <AlertTriangle size={24} />,
    },
  ]

  return (
    <div className={alert({intent})}>
        {Icon.map((item) => (
            item.intent === intent ? item.icon : null
        ))}
      <div className="mx-4">{title}</div>
    </div>
  );
}

export default Alert;
