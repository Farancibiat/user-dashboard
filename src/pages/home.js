
import React from "react";
import { Button, Result } from "antd";
import {Link} from 'react-router-dom'
export const Home = () => {
    return (
        <>
        <Result
    status="success"
    title="¡Bienvenid@!"
    subTitle={`"Login" exitoso"`}
    extra={[
        <Link to="/contactList">
      <Button type="primary" key="console">
        Ir a Agenda
      </Button></Link>,
      <Link to="/user">
      <Button key="buy">Ver Perfil</Button></Link>]}
      />
        </>
    );
};
export default Home;