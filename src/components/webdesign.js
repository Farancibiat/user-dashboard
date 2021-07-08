import React, { useState, useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import {Link} from 'react-router-dom';
import { Context } from "../store/appContext";


const { Header, Content, Footer, Sider } = Layout;

export const WebDesign = (props) => {
  const { store, actions } = useContext(Context);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" style={{ minHeight: "100vh"}} selectedKeys={[store.menuActiveItem]} mode="inline">
         
          <Menu.Item key="1" onClick={e=>actions.setMenuActiveItem(e.key)}>
          <Link to="/">
            <Icon type="home" />
            <span>Inicio</span>
            </Link>
          </Menu.Item>
         
          
          <Menu.Item key="2" onClick={e=>actions.setMenuActiveItem(e.key)}>
          <Link to="/user">
            <Icon type="user" />
            <span>Perfil de Usuario</span>
            </Link>
          </Menu.Item>
          
          
          <Menu.Item key="3" onClick={e=>actions.setMenuActiveItem(e.key)}>
          <Link to="/contactList">
            <Icon type="contacts" />
            <span>Agenda de Contactos</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#f7f7f7", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center", background: "#ffae00" }}>
          Created by <a href="http://farancibiat.cl">Felipe Arancibia</a> 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebDesign;
