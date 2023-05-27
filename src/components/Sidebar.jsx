import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import List from './List';

export default function Sidebar({ type }) {
  const sidebar = cva('div', {
    variants: {
      type: {
        primary: ['py-4', 'text-gray-500', 'dark:text-gray-400'],
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  });

  const [activeTab, setActiveTab] = useState(1);

  const listMenu = [
    {
      id: 1,
      title: 'Dashboard',
      type: 'primary',
      icon: '🥳',
      content: <div>test</div>,
    },
    {
      id: 2,
      title: 'Settings',
      type: 'primary',
      icon: '⚙️',
      content: <div>test</div>,
    },
    {
      id: 3,
      title: 'Profile',
      type: 'primary',
      icon: '👤',
      content: <div>test</div>,
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={sidebar({ type })}>
      <h1 className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
        Dashboard
      </h1>
      <ul className="mt-6">
        {listMenu.map((item) => (
          <List
            key={item.id}
            title={item.title}
            type={item.type}
            icons={item.icon}
            isActive={item.id === activeTab}
            onTabClick={() => handleTabClick(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
