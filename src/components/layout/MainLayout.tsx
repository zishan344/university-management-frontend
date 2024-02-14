import React, { createElement } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminSidebar } from "../../routes/admin.routes";

const MainLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;
  console.log("sidebar", adminSidebar.length, adminSidebar);
  return (
    <Layout>
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
          items={adminSidebar}
        />
      </Sider>
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
