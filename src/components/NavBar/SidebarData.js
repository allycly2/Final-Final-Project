import React from "react";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { PiAddressBook } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/App",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    link: "/UserProfile",
  },
  {
    title: "To Do List",
    icon: <MdOutlineStickyNote2 />,
    link: "/ToDoList",
  },
  {
    title: "Diary",
    icon: <PiAddressBook />,
    link: "/Diary",
  },
  {
    title: "Expense Tracker",
    icon: <AiOutlineDollar />,
    link: "/ExpenseTracker",
  },
  {
    title: "Holidays Worldwide",
    icon: <MdEvent />,
    link: "/Holiday",
  },
  {
    title: "Login",
    icon: <RiLogoutBoxLine />,
    link: "/Login",
  },
];
