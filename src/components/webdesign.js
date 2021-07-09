import React, { useState, useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const { Header, Content, Footer, Sider } = Layout;

export const WebDesign = (props) => {
  const { store, actions } = useContext(Context);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  return (
    <Layout >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          style={{ minHeight: "100vh" }}
          selectedKeys={[store.menuActiveItem]}
          mode="inline"
        >
          <Menu.Item key="1" onClick={(e) => actions.setMenuActiveItem(e.key)}>
            <Link to="/">
              <Icon type="home" />
              <span>Inicio</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2" onClick={(e) => actions.setMenuActiveItem(e.key)}>
            <Link to="/user">
              <Icon type="user" />
              <span>Perfil</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3" onClick={(e) => actions.setMenuActiveItem(e.key)}>
            <Link to="/contactList">
              <Icon type="contacts" />
              <span>Agenda</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#f0ad4e"}} ><h1 style={{fontSize:"2em", color:"#d9534f"}}>{store.titles[parseInt(store.menuActiveItem)-1]}</h1></Header>
        <Content>
          {props.children}
          </Content>
        <Footer style={{ textAlign: "center", }}>
          Created by <a target="_blank" href="http://farancibiat.cl">Felipe Arancibia</a> 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WebDesign;
