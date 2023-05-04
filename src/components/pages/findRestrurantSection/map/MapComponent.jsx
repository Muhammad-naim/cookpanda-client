import React, { useContext, useEffect, useState } from 'react';
import { Map, Marker } from "pigeon-maps"
import { restrurantContext } from '../FindRestrurant';

const MapComponent = () => {
    const { coordinate } = useContext(restrurantContext)
    const [anchor, setAnchor] = useState([23.746466, 90.376015])
    useEffect(() => {
        setAnchor(coordinate)
    }, [coordinate])
    return (
        <div className='mx-auto  order-first lg:order-last shadow-md'>
            <Map
                height={400}
                width={400}
                center={anchor}
            >
                <Marker width={50} anchor={anchor} />
            </Map>
        </div>
    );
};

export default MapComponent;