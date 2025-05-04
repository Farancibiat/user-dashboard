import React, { useContext, useEffect, useState } from "react";
import { Button, List, Avatar, Col, Row, Spin } from "antd";
import { Context } from "../store/appContext";
import {Contact} from "../components/Contact";


// this function it's a style definition for contact info
export const DescriptionItem = ({ title, content }) => {
    return (
      <div
        style={{
          fontSize: 14,
          marginBottom:2,
          color: "rgba(0,0,0,0.65)",
        }}
      >
        <p
          style={{
            marginBottom:0,
            marginRight: 8,
            display: "inline-block",
            color: "rgba(0,0,0,0.85)",
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );
}

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    
    // Asegurar que los usuarios estén cargados
    useEffect(() => {
      const loadUsers = async () => {
        // Si los usuarios no están cargados, intentamos cargarlos
        if (!store.loadState || store.users.length === 0) {
          setLoading(true);
          try {
            await actions.getUsers();
          } catch (error) {
            // Manejo silencioso de errores
          } finally {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      };
      
      loadUsers();
    }, [actions, store.users, store.loadState]);
    
    // Función para manejar clic en el botón Detalles
    const handleDetailsClick = async (index, user) => {
      try {
        await actions.launchModal(index);
      } catch (error) {
        // Manejo silencioso de errores
      }
    };

    // Renderizado del componente
    return (
      <>
        <Row style={{marginTop:30, marginBottom:60}}>
          <Col xs={0} sm={6}/>
          <Col xs={24} lg={12}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <Spin size="large" />
                <p>Cargando contactos...</p>
              </div>
            ) : store.users && store.users.length > 0 ? (
              <List 
                dataSource={store.users}
                bordered
                renderItem={(item, index) => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button 
                        type='link' 
                        onClick={() => handleDetailsClick(index, item)} 
                        key={`a-${item.id}`}
                      >
                        Detalles
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Col xs={0} sm={12}>
                          <Avatar style={{ color: '#f56a00', fontWeight:"bold", backgroundColor: '#fde3cf' }}>
                            {item.name.charAt(0)}
                          </Avatar>
                        </Col>
                      }
                      title={<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{item.name}</span>}
                      description={
                        <>
                          <DescriptionItem style={{marginBottom: "2px"}} title="Fono" content={item.phone}/>
                          <DescriptionItem title="E-mail" content={item.email}/>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '30px' }}>
                No se encontraron contactos
              </div>
            )}
          </Col>
          <Col xs={0} sm={6}/>
          
          {/* Modal de contacto */}
          {store.modalVisible && <Contact/>}
        </Row>
      </>
    );
};

export default ContactList;
