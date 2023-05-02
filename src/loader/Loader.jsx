import React, { createContext, useEffect, useState } from 'react';

const Loader = () => {
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
    console.log(foodItems, chefData);
    const loaderContext = createContext();
    return (
        <div>
            
        </div>
    );
};

export default Loader;