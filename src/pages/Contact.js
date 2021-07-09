import React, { useContext } from "react";
import { Modal, Button } from "antd";
import { Context } from "../store/appContext";



export const Contact = () => {
  const { store, actions } = useContext(Context);
  return (
    
      
      <Modal
          title={store.activeContact[1].name}
          visible={store.modalVisible}
          footer={[
            <Button key="submit" type="primary" onClick={()=>actions.setModalVisible(false)}>
              Submit
            </Button>,
          ]}
        >
          <p>{store.activeContact.email}</p>
          <p>hola</p>
          <p>Some contents...</p>
        </Modal>
  );
};
export default Contact;
