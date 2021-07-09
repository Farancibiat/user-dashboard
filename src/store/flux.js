import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      loadState: false,
      menuActiveItem: "1",
      titles: ["¡Bienvenido!", "Perfil", "Agenda"],
      activeContact:[],
      modalVisible: false,
    },
    actions: {
      getUsers: () => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setStore({profile:res.data.splice(0,1)})
            let aux = res.data.sort(function compare(a, b) {
              if (a.name.localeCompare(b.name)<0) {
                return -1;
              }
              if (a.name.localeCompare(b.name)>0) {
                return 1;
              }
              return 0;
            }) 
            setStore({ users:aux });
            setStore({ loadState: true });
            
          })
          .catch((e) => {
            console.log("Error on getUsers", e);
          });
      },
      setMenuActiveItem: (itemKey) => {
        setStore({ menuActiveItem: itemKey });
      },
      launchModal:(index)=>{
        setStore({activeContact: [index, getStore().users[index]]})
        getActions().setModalVisible(true)
        console.log("activeContact", getStore().activeContact)
      },
      setModalVisible:(visibility)=>{
        setStore({modalVisible: visibility})
        console.log(getStore().modalVisible)
      }

    },
  };
};
export default getState;
