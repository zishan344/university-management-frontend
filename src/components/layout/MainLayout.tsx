import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ height: "100vh" }}>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
