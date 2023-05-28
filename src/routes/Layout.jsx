import React, { useState } from "react";
import List from "../components/List";
import Dropdown from "../components/Dropdown";

import { Activity } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Scaling } from "lucide-react";
import { Search } from "lucide-react";
import { Github } from "lucide-react";

import Dashboard from "./root/Dashboard";
import Alerts from "./root/Alerts";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  const listMenu = [
    {
      id: 1,
      title: "Dashboard",
      type: "primary",
      icon: <Activity size={24} />,
      content: <Dashboard />,
    },
    {
      id: 2,
      title: "Alerts",
      type: "primary",
      icon: <AppWindow size={24} />,
      content: <Alerts />,
    },
    {
      id: 3,
      title: "Profile",
      type: "primary",
      icon: <Scaling size={24} />,
      content: <div>kontol</div>,
    },
  ];

  const dataDropdown = ["Today", "Yesterday", "Last 7 Days", "Last 30 Days"];
  return (
    <div className="flex w-full h-screen bg-black false">
      {/* <Sidebar /> */}
      <div className="w-1/5 z-30 flex-shrink-0 hidden w-64 overflow-y-auto lg:block">
        <div className="py-4 text-gray-500 dark:text-gray-400">
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
      </div>
      {/* end of sidebar */}

      <div className="w-full text-white bg-base">
        {/* Header Start */}
        <header className="z-40 py-4 shadow-bottom bg-black">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 text-white focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <Search size={18} />
                </div>
                {/* we'll refactor partial to component */}
                <input
                  placeholder="find components"
                  type="text"
                  className="text-white block w-full pl-8 py-2 text-gray bg-gray-700 leading-5 border border-gray-600 rounded focus:border-purple-400 focus:shadow-outline-purple form-input focus:outline-none "
                />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="flex">
                <a
                  href="https://github.com/febriaricandra"
                  className="rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  <Github size={24} />
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={clickOpen}
                  className="rounded-full focus:shadow-outline-purple focus:outline-none"
                >
                  <div className="relative rounded-full inline-block w-8 h-8 align-middle">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                    {/* dropdown */}
                  </div>
                </button>
                <Dropdown open={open} data={dataDropdown} />
              </li>
            </ul>
          </div>
        </header>
        {/* Header End */}

        {/* Page Dashboard Start */}
        <div className="h-full overflow-y-auto">
          {listMenu.map((item) => (
            <div
              key={item.id}
              className={activeTab === item.id ? "block" : "hidden"}
            >
              {item.content}
            </div>
          ))}
        </div>
        {/* Page Dashboard End */}
      </div>
      <aside className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-white px-5 py-3 text-black">
        <a
          href="https://saweria.co/febriaricandra"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium hover:opacity-75"
        >
          Hey! if you have more money, you can buy me a coffee👋🏻
        </a>
      </aside>
    </div>
  );
}
