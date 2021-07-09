import React, { useContext } from "react";
import { Modal, Button, Descriptions } from "antd";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  return (
    <Modal
      title="Información de Contacto"
      visible={store.modalVisible}
      onCancel={() => actions.setModalVisible(false)}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => actions.setModalVisible(false)}
          
        >
          Volver
        </Button>,
      ]}
    >
      <Descriptions title="Personal"column={1} layout="horizontal">
      <Descriptions.Item label="Nombre">{store.activeContact[1].name}</Descriptions.Item>
        <Descriptions.Item label="Usuario">{store.activeContact[1].username}</Descriptions.Item>
        <Descriptions.Item label="E-mail">{store.activeContact[1].email}</Descriptions.Item>
        <Descriptions.Item label="Telefono">{store.activeContact[1].phone}</Descriptions.Item>
        <Descriptions.Item label="Dirección" span={2}>{<a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${store.activeContact[1].address.geo.lat},${store.activeContact[1].address.geo.lng}`}>{`${store.activeContact[1].address.street}, ${store.activeContact[1].address.suite}`}</a>}</Descriptions.Item>
      </Descriptions>
      <Descriptions title="Empresarial"column={1} layout="horizontal">
      <Descriptions.Item label="Empresa">{store.activeContact[1].company.name}</Descriptions.Item>
      </Descriptions>

    </Modal>
  );
};
export default Contact;
