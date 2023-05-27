import React from "react";
import { CircleDollarSign, Table } from "lucide-react";
import { UserSquare } from "lucide-react";
import { Wallet } from "lucide-react";
import { Store } from "lucide-react";

import Card from "../../components/Card";
import List from "../../components/Table";
import { ChartLine } from "../../components/ChartLine";
import ChartDoughnut from "../../components/ChartDoughnut";

export default function Dashboard() {
  const data = [
    {
      id: 1,
      title: "Total Orders",
      data: "2,390",
      icons: <CircleDollarSign size={24} />,
    },
    {
      id: 2,
      title: "Total Account",
      data: "222",
      icons: <UserSquare size={24} />,
    },
    {
      id: 3,
      title: "Profit",
      data: "$ 1,000",
      icons: <Wallet size={24} />,
    },
    {
      id: 4,
      title: "Market",
      data: "420",
      icons: <Store size={24} />,
    },
  ];

  const header = ["Client", "Amount", "Status", "Date"];

  const tableData = [
    {
      id: 1,
      client: "John Doe",
      amount: "$ 2,500",
      status: "Approved",
      date: "2020/01/01",
    },
    {
      id: 2,
      client: "John Doe",
      amount: "$ 2,500",
      status: "Approved",
      date: "2020/01/01",
    },
    {
      id: 3,
      client: "John Doe",
      amount: "$ 2,500",
      status: "Approved",
      date: "2020/01/01",
    },
    {
      id: 4,
      client: "John Doe",
      amount: "$ 2,500",
      status: "Approved",
      date: "2020/01/01",
    },
  ];


  return (
    <div className="my-6">
      <div className="container grid px-6 mx-auto">
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              data={item.data}
              icons={item.icons}
            />
          ))}
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs mb-4">
          <List header={header} data={tableData} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 my-2">
          <div className="min-w-0 p-4 bg-card rounded-lg shadow-xs ">
            <ChartDoughnut />
          </div>
          <div className="min-w-0 p-4 bg-card rounded-lg shadow-xs">
            <ChartLine />
          </div>
        </div>
        <div className="my-6"></div>
      </div>
    </div>
  );
}
