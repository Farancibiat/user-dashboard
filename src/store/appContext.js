import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        //this will be passed as the context value
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState(prevState => ({
                        store: Object.assign({}, prevState.store, updatedStore),
                        actions: { ...prevState.actions }
                    }))
            })
        );

        // Carga inicial de datos cuando el componente se monta
        useEffect(() => {
            const loadInitialData = async () => {
                // Establecer el menú activo basado en la ruta actual
                const path = window.location.pathname;
                let activeItem;
                
                if (path === "/user")
                    activeItem = "2";
                else if (path === "/contactList")
                    activeItem = "3";
                else
                    activeItem = "1";
                
                // Actualizar el ítem activo del menú
                state.actions.setMenuActiveItem(activeItem);
                
                // Cargar usuarios - importante: esperar a que termine
                await state.actions.getUsers();
            };
            
            loadInitialData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); // Solo ejecutar al montar el componente

        // the context will now have a getStore, getActions and setStore functions available, because they were declared
        // on the state of this component
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;