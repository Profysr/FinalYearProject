import React from "react";
import "./sidebar.css";
import {
  CodesandBox,
  DashboardIcon,
  GitPullRequest,
  MessageIcon,
} from "@/source/Assets/Icons";
import Link from "next/link";

const menulinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon width={24} height={24} />,
    href: "#",
  },
  {
    id: 2,
    name: "Allocate Courses",
    icon: <GitPullRequest width={24} height={24} />,
    href: "#",
  },
  {
    id: 3,
    name: "Applications",
    icon: <MessageIcon width={24} height={24} />,
    href: "#",
  },
];
const Sidebar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar_top">
          <CodesandBox width={24} height={24} />
          Serve With Ease
        </div>
        <nav className="sidebar__container">
          <div className="sidebar__content">
            <div className="sidebar__list">
              {menulinks.map((data) => (
                <Link href={data.href} id={data.id} className="sidebar__link">
                  {data.icon}
                  <span className="sidebar__link-name">{data.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* <main className="container" id="main">
        <h1>Dashboard Page</h1>
      </main> */}
    </>
  );
};

export default Sidebar;
