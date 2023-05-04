import React from 'react';
import Banner from '../banner/Banner';
import ChefSection from '../chefSection/ChefSection';
import FindRestrurant from '../pages/findRestrurantSection/FindRestrurant';
import ItemsContainer from '../pages/FeaturedItemsSection/ItemsContainer';

const Home = () => {
    return (
        <div >
            <Banner />
            <ChefSection />
            <FindRestrurant />
            <ItemsContainer/>
        </div>
    );
};

export default Home;