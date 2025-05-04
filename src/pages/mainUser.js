import React, { useContext } from "react";
import { Descriptions, Spin, Row, Col, Typography } from "antd";
import { Context } from "../store/appContext";

const { Text } = Typography;

export const MainUser = () => {
  const { store } = useContext(Context);
  
  // Verificar que profile existe y tiene las propiedades necesarias
  const hasProfileData = Boolean(
    store.profile && 
    store.profile.name && 
    store.profile.address
  );
  
  return (
    <>
      {store.loadState && hasProfileData ? (
        <Row style={{ margin: "30px"}}>
          <Col xs={0} sm={6} />
          <Col xs={24} lg={12} >
            <Descriptions title="Personal" column={1} bordered>
              <Descriptions.Item label={<Text strong>Nombre</Text>}>
                {store.profile.name}
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>Usuario</Text>}>
                {store.profile.username}
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>E-mail</Text>}>
                {store.profile.email}
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>Teléfono</Text>}>
                {store.profile.phone}
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>Dirección</Text>}>
                {
                  // this anchor goes to google maps with latitude and longitude
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${store.profile.address.geo.lat},${store.profile.address.geo.lng}`}
                  >{`${store.profile.address.street}, ${store.profile.address.suite}`}</a>
                }
              </Descriptions.Item>
            </Descriptions>
            <Descriptions
              title="Empresarial"
              column={1}
              layout="horizontal"
              bordered
              style={{marginTop:"20px"}}
            >
              <Descriptions.Item label={<Text strong>Empresa</Text>}>
                {store.profile.company.name}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col xs={0} sm={6} />
        </Row>
      ) : (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          flexDirection: "column"
        }}>
          <Spin size="large"/>
          <Text style={{marginTop: "20px"}}>Cargando información del perfil...</Text>
        </div>
      )}
    </>
  );
};
export default MainUser;
