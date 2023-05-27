import React from 'react';
import { cva } from 'class-variance-authority';

export default function List({ icons, title, type, isActive, onTabClick }) {
  const list = cva('div', {
    variants: {
      type: {
        primary: [
          'inline-flex',
          'items-center',
          'w-full',
          'text-sm',
          'font-semibold',
          'transition-colors',
          'duration-150',
          'hover:text-gray-800',
          'dark:hover:text-gray-200',
          'text-gray-800',
          'dark:text-gray-100',
        ],
        secondary: [
            'inline-flex',
            'items-center',
            'w-full',
            'text-sm',
            'font-semibold',
            'transition-colors',
            'duration-150',
            'hover:text-gray-800',
            'dark:hover:text-gray-200',
            'text-gray-800',
            'dark:text-gray-100',
        ],
      },
    },
    compoundVariants: [
        { type: 'primary', class: 'border-transparent' },
        { type: 'secondary', class: 'border-transparent' },
    ],
    defaultVariants: {
        type: 'primary',
    },
  });

  return (
    <>
      <li className="relative px-6 py-3 list-none">
        <button
          className={list({ type })}
          onClick={onTabClick}
        >
          {isActive && (
            <span
              className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
          )}
          {icons}
          <span className="ml-4">{title}</span>
        </button>
      </li>
    </>
  );
}
