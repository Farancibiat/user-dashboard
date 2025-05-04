import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { HomeOutlined, UserOutlined, ContactsOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export const WebDesign = (props) => {
  const { store, actions } = useContext(Context);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link to="/">Inicio</Link>,
      onClick: (e) => actions.setMenuActiveItem(e.key),
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <Link to="/user">Perfil</Link>,
      onClick: (e) => actions.setMenuActiveItem(e.key),
    },
    {
      key: "3",
      icon: <ContactsOutlined />,
      label: <Link to="/contactList">Agenda</Link>,
      onClick: (e) => actions.setMenuActiveItem(e.key),
    },
  ];

  return (
    <Layout >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          style={{ minHeight: "100vh" }}
          selectedKeys={[store.menuActiveItem]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ background: "#f0ad4e"}} ><h1 style={{fontSize:"2em", color:"#d9534f"}}>{store.titles[parseInt(store.menuActiveItem)-1]}</h1></Header>
        <Content>
          {props.children}
          </Content>
        <Footer style={{ textAlign: "center", }}>
          Created by <a target="_blank" rel="noreferrer" href="http://farancibiat.cl">Felipe Arancibia</a> 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebDesign;
