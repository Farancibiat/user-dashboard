import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutline } from "@ant-design/icons";
import "../styles/SideBar.css";
import logo from "../img/logo192.png";

const TopNavbar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="danger"
        icon={<MenuOutline type="primary"/>}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      > 
        {menu}
     </Drawer>
     <a href="/"><img src={logo} className="logo" alt="logo" /></a>     
    </nav>
  );
};
export default TopNavbar;