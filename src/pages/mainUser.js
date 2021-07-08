import React, { useContext } from "react";
import { Button } from "antd";
import { Context } from "../store/appContext";

export const MainUser = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.loadState ? (
        <div>
          <div>Nombre: {store.users[0]['name']}</div>
          <div>Fono: {store.users[0]['phone']}</div>
          <div>E-mail: {store.users[0]['email']}</div>
        </div>
      ) : (
        <></>
      )}
      <Button type="primary" style={{ marginLeft: 8 }}>
        Ver mas
      </Button>
    </>
  );
};
export default MainUser;
