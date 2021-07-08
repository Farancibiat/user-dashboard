import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { users: [], loadState: false, menuActiveItem: "1" },
    actions: {
      getUsers: () => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            console.log(res.data);
            setStore({ users: res.data });
            setStore({ loadState: true });
          })
          .catch((e) => {
            console.log("Error on getUsers", e);
          });
      },
      setMenuActiveItem: (itemKey) => {
           setStore({ menuActiveItem: itemKey });
      },
    },
  };
};
export default getState;
