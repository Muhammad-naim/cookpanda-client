import React, { useContext } from 'react';
import { restrurantContext } from '../FindRestrurant';

const RestrurantList = () => {
    const { handleSetCoordinate } = useContext(restrurantContext)
    return (
        <div className='my-auto max-h-96 overflow-y-scroll'>
            <div className='p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]' onClick={() => handleSetCoordinate([23.746466, 90.376015])}>
                <p>Hotel saladia</p>
            </div>
            <div className='p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]' onClick={() => handleSetCoordinate([23.797911, 90.414391])}>
                <p>Project Hilsa</p>
            </div>
            <div className='p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]' onClick={() => handleSetCoordinate([23.744084, 90.369504])}>
                <p>Cattle Restrurant</p>
            </div>
            <div className='p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]' onClick={() => handleSetCoordinate([23.749844, 90.380398])}>
                <p>Bangla Bhoj</p>
            </div>
            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([23.810331, 90.408865])}>
                <p>Jatiyo Restrurant</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([22.356915, 91.788982])}>
                <p>Abloom Restrurant</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([24.900412, 91.872909])}>
                <p>Srimangal Cafe</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([22.845644, 89.540329])}>
                <p>Sundarbans Restrurant</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([23.710394, 90.410081])}>
                <p>Dhaka Restrurant</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([22.340243, 91.837238])}>
                <p>Mejjan Haile Aiyun</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([24.372653, 88.604576])}>
                <p>Hazi Biriyani</p>
            </div>

            <div className="p-4 mx-auto w-10/12 shadow-md rounded text-center hover:bg-[#da9691]" onClick={() => handleSetCoordinate([22.492364, 91.956237])}>
                <p>Sultan's dine</p>
            </div>
        </div>
    );
};

export default RestrurantList;