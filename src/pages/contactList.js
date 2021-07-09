import React, { useState, useContext } from "react";
import { Button, List, Avatar, Col, Row } from "antd";
import { Context } from "../store/appContext";
import {Contact} from "./Contact";



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
    

    return (<>
      <Row style={{marginTop:30, marginBottom:60}}>
        <Col xs={0} sm={6}></Col>
        <Col xs={24}lg={12}>
        <List dataSource={store.users}
          bordered
          renderItem={(item, index) => (
            <List.Item
              key={item.id}
              actions={[
                <Button type='link' onClick={()=>actions.launchModal(index)} key={`a-${item.id}`}>
                  Detalles
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<><Col xs={0} sm={12}>
                  <Avatar style={{ color: '#f56a00', fontWeight:"bold", backgroundColor: '#fde3cf' }}>{item.name.split("")[0]}</Avatar>
                  </Col>
                  </>
                }
                title={<h2>{item.name}</h2>}
                description={<><DescriptionItem style={{marginBottom: "2 !important",}}title="Fono" content={item.phone}/><DescriptionItem title="E-mail" content={item.email}/></>}
              />
              
            </List.Item>
          )}
        />
        </Col>
        <Col xs={0} sm={6}></Col>
        {store.modalVisible?<Contact/>:<></>}
        
       </Row>
      </>
    );
  };
export default ContactList;
