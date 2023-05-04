import React, { createContext, useState } from 'react';
import RestrurantList from './restrurantList/RestrurantList';
import MapComponent from './map/MapComponent';

export const restrurantContext = createContext(null);
const FindRestrurant = () => {
    const [coordinate, setCoordinate] = useState([])
    const handleSetCoordinate = (value) => {
        setCoordinate(value)
    }
    const coInfo = {
        coordinate,
        handleSetCoordinate
    }
    return (
        <restrurantContext.Provider value={coInfo}>
            <div className='text-center  my-8'>
                <h1 className='text-2xl font-semibold py-4 bg-[#f0bebb] rounded-md'>Best Restaurants in Banglaesh</h1>
                <div className='grid reve grid-cols-1 lg:grid-cols-2 gap-4 my-2 pb-2 '>
                    <RestrurantList />
                    <MapComponent />
                </div>
            </div>
        </restrurantContext.Provider>

    );
};

export default FindRestrurant;