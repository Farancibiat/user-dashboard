
import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Button } from "antd";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
        <div >ContactList</div>
        <Button type="primary" color="volcano-10" style={{ marginLeft: 8 }}>
      Yeah
    </Button>
        </>
    );
};
export default ContactList;