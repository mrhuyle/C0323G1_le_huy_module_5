import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const menus = [
    { name: "Services", link: "/dashboard/services", icon: BiBed },
    { name: "Customers", link: "/dashboard/customers", icon: AiOutlineUser },
    {
      name: "Contracts",
      link: "/dashboard/contracts",
      icon: TbReportAnalytics,
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-green-800 min-h-screen ${
          open ? "w-60" : "w-20"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="flex flex-col gap-4 py-3">
          <HiMenuAlt3
            size={`${open ? "30" : "30"}`}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="relative flex flex-col gap-4 mt-4">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit z-10`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="flex py-3 mt-5">
          <AiOutlineHome
            size={`${open ? "30" : "30"}`}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      </div>
      <div className="flex justify-center w-full m-3 text-xl font-semibold text-gray-900">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
