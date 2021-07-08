import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {Row, Col, Card} from 'antd';

export const ContactCard = props => {
	const { store, actions } = useContext(Context);

	return (<div>Hola</div>
// 		<Row>
//             <Col>
//             <Card style={{ width: 300 }}>
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// 			<div className="col-12 col-md-6 col-sm-4">
// 				<p className="fs-5 my-2">{data.full_name}</p>
// 				<p className="fs-6 text-secondary my-1">
// 					<i className="fas fa-map-marker-alt pe-3"></i>
// 					{data.address}
// 				</p>
// 				<p className="fs-6 text-secondary my-1">
// 					<i className="fas fa-phone pe-3"></i>
// 					{data.phone}
// 				</p>
// 				<p className="fs-6 text-secondary my-1">
// 					<i className="fas fa-envelope pe-3"></i>
// 					{data.email}
// 				</p>
// 			</Col>
// 			<div className="col-md-1 col-sm-4"></div>
// 			<div className="col-12 col-md-2 col-sm-2 text-center">
// 				<button
// 					className="btn"
// 					onClick={() => actions.startModify(data)}>
// 					<i className="fas fa-pencil-alt"></i>
// 				</button>
// 				<button
// 					className="btn"
// 					onClick={() => actions.delContact(data.id)}>
// 					<i className="fas fa-trash-alt"></i>
// 				</button>
// 			</div>
// 		</Row>
	);
};
export default ContactCard;