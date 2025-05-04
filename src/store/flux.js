import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      loadState: false,
      menuActiveItem: "1",
      titles: ["¡Bienvenid@!", "Perfil", "Agenda"],
      activeContact: null,
      modalVisible: false,
      profile: {},
    },
    actions: {
      // getUsers loads user profile, and the users sorting them by first name.
      // Then, modifies the load state to activate renders that depends of this load
      getUsers: async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET",
              "Access-Control-Allow-Headers": "*",
              "cache-control": "no-cache",
            },
          });
          
          if (response.data && response.data.length > 0) {
            // Guardar el primer usuario como perfil (como objeto directo, no como array)
            setStore({ profile: response.data[0] });
            
            // Crear una copia ordenada del array de usuarios
            let sortedUsers = [...response.data].sort((a, b) => {
              return a.name.localeCompare(b.name);
            });
            
            // Guardar usuarios ordenados y actualizar estado de carga
            setStore({ 
              users: sortedUsers,
              loadState: true 
            });
            
            return sortedUsers; // Devolver los usuarios para poder usarlos directamente
          } else {
            return [];
          }
        } catch (error) {
          return [];
        }
      },

      // This function modifies the variable that sets the header, and the active bar item
      setMenuActiveItem: (itemKey) => {
        setStore({ menuActiveItem: itemKey });
      },

      // launch modal uses the index of the contact to deploy the modal with the specific contact info.
      // and modifies the visibility of the modal.
      launchModal: async (index) => {
        // Obtener una referencia directa al usuario en vez de usar getStore().users
        let users = getStore().users;
        
        // Si no hay usuarios, cargarlos primero
        if (!users || users.length === 0) {
          users = await getActions().getUsers();
        }
        
        // Verificar que el usuario existe en el índice proporcionado
        if (users && users.length > 0 && index >= 0 && index < users.length) {
          const contact = users[index];
          
          if (contact) {
            // Primero establecer el contacto activo
            setStore({ activeContact: contact });
            // Luego mostrar el modal
            getActions().setModalVisible(true);
          }
        }
      },

      // This function just change's modal visibility 
      setModalVisible: (visibility) => {
        setStore({ modalVisible: visibility });
      },
    },
  };
};
export default getState;
