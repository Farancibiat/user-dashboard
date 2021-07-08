import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import {Link} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

export const WebDesign = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
         
          <Menu.Item key="1">
          <Link to="/">
            <Icon type="home" />
            <span>Inicio</span>
            </Link>
          </Menu.Item>
         
          
          <Menu.Item key="2">
          <Link to="/user">
            <Icon type="user" />
            <span>Perfil de Usuario</span>
            </Link>
          </Menu.Item>
          
          
          <Menu.Item key="3">
          <Link to="/contactList">
            <Icon type="contacts" />
            <span>Agenda de Contactos</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by <a href="http://farancibiat.cl">Felipe Arancibia</a> 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebDesign;
