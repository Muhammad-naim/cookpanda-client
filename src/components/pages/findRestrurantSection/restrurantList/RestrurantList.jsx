import React, { useContext, useEffect, useState } from 'react';
import { restrurantContext } from '../FindRestrurant';

const RestrurantList = () => {
    const { handleSetCoordinate } = useContext(restrurantContext)
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        fetch('https://cookpanda-backend-muhammad-naim.vercel.app/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])
    return (
        <div className='my-auto max-h-96 overflow-y-scroll'>
            {
                restaurants.map((item, index) => {
                    return (<div key={index} className='p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]' onClick={() => handleSetCoordinate([item?.coordinates?.latitude, item?.coordinates?.longitude])}>
                        <p>{item.name}</p>
                    </div>)
                })
            }

        </div>
    );
};

export default RestrurantList;