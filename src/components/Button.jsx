import React from "react";
import { cva } from "class-variance-authority";

export default function Button({intent, size, className, ...props}) {
  const button = cva("rounded button", {
    variants: {
      intent: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      { intent: "primary", size: "medium", class: "uppercase" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  });
  return <button className={button({ intent, size, className })} {...props} />;
}
