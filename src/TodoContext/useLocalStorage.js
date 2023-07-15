import React from "react";
    
    // Las funciones que empiezan con "use" son custom hooks
function useLocalStorage(itemName, initValue) {      
        // Local storage, haciendo la app persistente
    const [item, setItem] = React.useState(initValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initValue));
                parsedItem = initValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
            }

            setLoading(false);
        } catch(error) {
            setLoading(false);
            setError(true);
        }
    }, [])


        // Funcion para actualizar el estado y el local storage al mismo tiempo
    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    };

    return {
        item, 
        saveItem, 
        loading, 
        error
    };
}

export { useLocalStorage };