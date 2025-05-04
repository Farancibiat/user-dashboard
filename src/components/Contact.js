import React, { useContext } from "react";
import { Modal, Button, Descriptions, Spin, Typography } from "antd";
import { Context } from "../store/appContext";

const { Text } = Typography;

export const Contact = () => {
  const { store, actions } = useContext(Context);
  
  // Función para cerrar el modal
  const handleClose = () => {
    actions.setModalVisible(false);
  };
  
  // Verificar si activeContact existe y tiene las propiedades necesarias
  const hasContactData = Boolean(
    store.activeContact && 
    store.activeContact.name && 
    store.activeContact.address
  );
  
  return (
    <Modal
      title={<Text strong>Información de Contacto</Text>}
      open={store.modalVisible}
      onCancel={handleClose}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={handleClose}
        >
          Volver
        </Button>,
      ]}
    >
      {hasContactData ? (
        <>
          <Descriptions title="Personal" column={1} layout="horizontal" bordered>
            <Descriptions.Item label={<Text strong>Nombre</Text>}>
              {store.activeContact.name}
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Usuario</Text>}>
              {store.activeContact.username}
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>E-mail</Text>}>
              {store.activeContact.email}
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Teléfono</Text>}>
              {store.activeContact.phone}
            </Descriptions.Item>
            {store.activeContact.address && store.activeContact.address.geo && (
              <Descriptions.Item label={<Text strong>Dirección</Text>}>
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href={`https://www.google.com/maps/search/?api=1&query=${store.activeContact.address.geo.lat},${store.activeContact.address.geo.lng}`}
                >
                  {`${store.activeContact.address.street}, ${store.activeContact.address.suite}`}
                </a>
              </Descriptions.Item>
            )}
          </Descriptions>
          {store.activeContact.company && (
            <Descriptions title="Empresarial" column={1} layout="horizontal" bordered style={{ marginTop: 16 }}>
              <Descriptions.Item label={<Text strong>Empresa</Text>}>
                {store.activeContact.company.name}
              </Descriptions.Item>
            </Descriptions>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Spin size="large" />
          <p style={{ marginTop: '10px' }}>Cargando información de contacto...</p>
        </div>
      )}
    </Modal>
  );
};

export default Contact;
