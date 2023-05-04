import React from 'react';
import Banner from '../banner/Banner';
import ChefSection from '../chefSection/ChefSection';
import FindRestrurant from '../pages/findRestrurantSection/FindRestrurant';

const Home = () => {
    return (
        <div>
            <Banner />
            <ChefSection />
            <FindRestrurant/>
        </div>
    );
};

export default Home;