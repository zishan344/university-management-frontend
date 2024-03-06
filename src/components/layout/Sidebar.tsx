import { Layout, Menu } from "antd";
import sidebarGenerator from "../../utils/sidebarGenerator";
import { adminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const Sidebar = () => {
  const { Sider } = Layout;
  const userRole = {
    ADMIN: "admin",
    Faculty: "faculty",
    STUDENT: "student",
  };
  const user = useAppSelector(selectCurrentUser);

  let sidebarItem;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItem = sidebarGenerator(adminPath, userRole.ADMIN);
      break;
    case userRole.Faculty:
      sidebarItem = sidebarGenerator(facultyPath, userRole.Faculty);
      break;
    case userRole.STUDENT:
      sidebarItem = sidebarGenerator(studentPath, userRole.STUDENT);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1>SP-uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
