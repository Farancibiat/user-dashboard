import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      loadState: false,
      menuActiveItem: "1",
      titles: ["¡Bienvenid@!", "Perfil", "Agenda"],
      activeContact: [],
      modalVisible: false,
      profile: {},
    },
    actions: {
      // getUsers loads user profile, and the users sorting them by first name.
      // Then, modifies the load state to activate renders that depends of this load
      getUsers: () => {
        axios
          .get("https://jsonplaceholder.typicode.com/users", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET",
              "Access-Control-Allow-Headers": "*",
              "cache-control": "no-cache",
            },
          })
          .then((res) => {
            setStore({ profile: res.data.splice(0, 1) });
            let aux = res.data.sort(function compare(a, b) {
              if (a.name.localeCompare(b.name) < 0) {
                return -1;
              }
              if (a.name.localeCompare(b.name) > 0) {
                return 1;
              }
              return 0;
            });
            setStore({ users: aux });
            setStore({ loadState: true });
          })
          .catch((e) => {
            console.log("Error on getUsers", e);
          });
      },

      // This function modifies the variable that sets the header, and the active bar item
      setMenuActiveItem: (itemKey) => {
        setStore({ menuActiveItem: itemKey });
      },

      // launnch modal uses the index of the contact to deploy the modal with the specific contact info.
      // and modifies the visibility of the modal.
      launchModal: (index) => {
        setStore({ activeContact: [index, getStore().users[index]] });
        getActions().setModalVisible(true);
      },

      // This function just change's modal visibility 
      setModalVisible: (visibility) => {
        setStore({ modalVisible: visibility });
      },
    },
  };
};
export default getState;
