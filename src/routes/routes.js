import React, { useState } from "react";
import List from "../components/List";
import Dropdown from "../components/Dropdown";

import { Activity } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Scaling } from "lucide-react";
import { Command } from "lucide-react";

import Dashboard from "./root/Dashboard";
import Alerts from "./root/Alerts";
import Modals from "./root/Modals";
import Buttons from "./root/Buttons";

export default [
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
    title: "Modals",
    type: "primary",
    icon: <Scaling size={24} />,
    content: <Modals />,
  },
  {
    id: 4,
    title: "Buttons",
    type: "primary",
    icon: <Command size={24} />,
    content: <Buttons />,
  },
];
