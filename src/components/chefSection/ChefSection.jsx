import React, { useEffect, useState } from 'react';
import ChefCard from './chefCard/ChefCard';


const ChefSection = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('https://cookpanda-backend-muhammad-naim.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8 mx-2 lg:mx-0 " >
            {
                chefData.map(item => 
                    <ChefCard
                        key={item.id}
                        data={item}
                        
                    >

                    </ChefCard>
                )
            }
        </div>
    );
};

export default ChefSection;