import { NavLink } from "react-router-dom";
import { TSidebar, TUserPath } from "../types";

const sidebarGenerator = (items: TUserPath[], role: string) => {
  const Sidebar = items.reduce((acc: TSidebar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
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
  return Sidebar;
};

export default sidebarGenerator;
