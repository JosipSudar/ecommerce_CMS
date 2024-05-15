import React, { useEffect, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import {
  SiCarto,
  SiGooglehome,
  SiPayloadcms,
  SiProducthunt,
  SiSuperuser,
} from "react-icons/si";
import { FaCalendarCheck, FaUserFriends } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsFillKanbanFill } from "react-icons/bs";

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const navList: NavItem[] = [
  {
    name: "Home",
    path: "/",
    icon: <SiGooglehome />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <FaUserFriends />,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <SiCarto />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <SiProducthunt />,
  },
  {
    name: "Employees",
    path: "/employees",
    icon: <SiSuperuser />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <FaCalendarCheck />,
  },
  {
    name: "Kanban",
    path: "/kanban",
    icon: <BsFillKanbanFill />,
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <aside className="p-10 border-r border-gray-200">
      <div className="flex items-center gap-5">
        <SiPayloadcms size={40} color="blue" />{" "}
        <h1 className=" text-3xl font-semibold">CommerceHub</h1>
      </div>
      <nav className=" text-2xl pt-20 space-y-4">
        {navList.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`flex items-center gap-4 rounded-md p-3 ${
              activeLink === item.path
                ? "bg-blue-500 text-white"
                : " text-gray-400"
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>
      <hr className="my-5" />
      <div className="flex items-center justify-evenly">
        <div className="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/79008423?v=4"
            alt="user img"
            className="w-12 rounded-full"
          />
          <p>Logged In as Ino Stiv</p>
        </div>
        <IoLogOut size={30} color="red" className="cursor-pointer ml-5" />
      </div>
    </aside>
  );
};

export default Sidebar;
