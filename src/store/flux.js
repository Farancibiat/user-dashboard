import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { users: [], loadState: false },
    actions: {
      getUsers: () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
          console.log(res.data);
          setStore({users: res})
        }).catch(e=>{
          console.log('Error on getUsers',e)
        })
      },
    },
  };
};
export default getState;
