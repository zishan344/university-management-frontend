import { App } from "antd";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

const adminPath = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "create student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "create student",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];

export const adminRoutes = adminPath.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({ path: item.path, element: item.element });
  }
  if (item.children) {
    item.children.forEach((child) =>
      acc.push({ path: child.path, element: child.element })
    );
  }
  return acc;
}, []);

export const adminSidebar = adminPath.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []);
