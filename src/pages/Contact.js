
import React, {useContext} from "react";
import { Button } from "antd";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
        <div>Contact Page</div>
        <Button type="primary" style={{ marginLeft: 8 }}>
      Yeah
    </Button>
        </>
    );
};
export default Contact;