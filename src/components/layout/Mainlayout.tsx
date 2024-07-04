import { Menu,  } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import {  Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

// const items: MenuProps["items"] = [
//   {
//     key: "dashbord",
//     label: <NavLink to="/admin/dashbord">Dashbord</NavLink>,
//   },
//   {
//     key: "2",
//     label: "Profile",
//   },
//   {
//     key: "User Manager",
//     label: "User Manager",
//     children: [
//       {
//         key: "create-admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "create-student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//       {
//         key: "create-facutly",
//         label: <NavLink to="/admin/create-facutly">Create Faculty</NavLink>,
//       },
//     ],
//   },
// ];

const Mainlayout = () => {
  return (
    <Layout style={{ height: "100v" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center ",
            alignItems: "center",
          }}
          className="demo-logo-vertical"
        >
          <h1 style={{ height: "20px" }}>Ph Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
