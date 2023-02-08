import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "News",
	path: "/admin-newsfeed",
	icon: <FaIcons.FaEnvelopeOpenText />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
		{
			title: "Add News",
			path: "/edit/newsfeed",
			icon: <IoIcons.IoIosPaper />,
		},		
		],

},
{
	title: "Announcements",
	path: "/edit/announcements",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Departments",
	path: "/viewdepartments",
	icon: <FaIcons.FaLayerGroup />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Project",
	// path: "/events",
	icon: <FaIcons.FaTasks />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Project",
		path: "/add/project",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Add Module",
		path: "/add/module",
		icon: <IoIcons.IoIosPaper />,
	},
	// {
	// 	title: "Edit Project",
	// 	path: "/edit/project",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	],
},
{
	title: "Employee",
	icon: <FaIcons.FaUsers />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	// {
	// 	title: "Edit Employees",
	// 	path: "/edit/employee",
	// 	icon: <IoIcons.IoIosPaper />,
	// 	cName: "sub-nav",
	// },
	{
		title: "Add Employee",
		path: "/add/employee",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "Upload Documents",
	path: "/upload-documents",
	icon: <FaIcons.FaBook />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Policies",
	path: "/admin-policies",
	icon: <FaIcons.FaTasks />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},

];