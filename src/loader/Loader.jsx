import React, { createContext, useEffect, useState } from 'react';

export const loaderContext = createContext();
const Loader = ({children}) => {
    const [foodItems, setFoodItems] = useState([])
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('https://cookpanda-backend-muhammad-naim.vercel.app/items')       
            .then(res => res.json())
            .then(data => setFoodItems(data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch('https://cookpanda-backend-muhammad-naim.vercel.app/chefs')
            .then(res => res.json())    
            .then(data => setChefData(data))
            .catch(error => console.log(error))
    }, [])

    const data = {
        chefData,
        foodItems
    }
    return (
        <loaderContext.Provider value={data}>
           {children}
        </loaderContext.Provider>
    );
};

export default Loader;