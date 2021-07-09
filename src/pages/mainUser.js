import React, { useContext } from "react";
import { Descriptions, Spin, Row, Col} from "antd";
import { Context } from "../store/appContext";

export const MainUser = () => {
  const { store } = useContext(Context);
  return (
    <>{store.loadState? (
      <Row style={{ margin: "30px"}}>
        <Col xs={0} sm={6} />
        <Col xs={24} lg={12} >
              <Descriptions title="Personal" column={1} bordered>
                <Descriptions.Item label="Nombre">
                  {store.profile[0].name}
                </Descriptions.Item>
                <Descriptions.Item label="Usuario">
                  {store.profile[0].username}
                </Descriptions.Item>
                <Descriptions.Item label="E-mail">
                  {store.profile[0].email}
                </Descriptions.Item>
                <Descriptions.Item label="Telefono">
                  {store.profile[0].phone}
                </Descriptions.Item>
                <Descriptions.Item label="Dirección" span={2}>
                  {
                    // this anchor goes to google maps with latitude and longitude
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.google.com/maps/search/?api=1&query=${store.profile[0].address.geo.lat},${store.profile[0].address.geo.lng}`}
                    >{`${store.profile[0].address.street}, ${store.profile[0].address.suite}`}</a>
                  }
                </Descriptions.Item>
              </Descriptions>
              <Descriptions
                title="Empresarial"
                column={1}
                layout="horizontal"
                bordered
                style={{marginTop:"10px"}}
              >
                <Descriptions.Item label="Empresa">
                  {store.profile[0].company.name}
                </Descriptions.Item>
              </Descriptions>
        </Col>
        <Col xs={0} sm={6} />
      </Row>
      ) : (
          <div style={{marginRight:"auto",marginLeft:"auto", width:"1em",lineHeight:"300px"}}>
          <Spin/>
          </div>
        
       
        
      )}
    </>
  );
};
export default MainUser;
