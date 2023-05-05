import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loaderContext } from '../../../loader/Loader';
import Swiper from 'react-id-swiper';
import FoodCard from '../../foodSection/foodCard/FoodCard';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const { id } = useParams()
    const { foodItems } = useContext(loaderContext)
    const [chefDetails, setChefDetails] = useState({});
    const [isFiltered, setIsFiltered] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://cookpanda-backend-muhammad-naim.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => {
                setChefDetails(data)
                setIsFiltered(true)
            })
            .catch(error => navigate('/error'))
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { recipeIds } = chefDetails;
    let chefRecipes = []
    if (isFiltered) {
        chefRecipes = foodItems.filter(item => recipeIds.includes(item?.foodID))
    }
    return (
        <div className='my-8'>
                <div className="hero  bg-base-200">
                    <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                        <LazyLoad >
                            <img src={chefDetails.chefPhotoURL} className="max-w-lg rounded-md shadow-xl mx-auto" />
                        </LazyLoad>
                        <div>
                            <h1 className="text-3xl font-bold"> {chefDetails.chefName}</h1>
                            <p className="py-0">{chefDetails.bio}</p>
                            <p className="py-0"><span className='font-semibold'>Experience:</span> {chefDetails.yearsOfExperience} years</p>
                            <p className="py-0"><span className='font-semibold'>Total Recipes: </span>{chefDetails.numOfRecipes}</p>
                            <p className="py-0"><span className='font-semibold'>Likes:</span> {chefDetails.likes}</p>
                        </div>
                    </div>
                </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 my-8 mx-auto'>
                {
                    chefRecipes.map(item => {
                        return <FoodCard
                            key={item.foodID}
                            data={item}

                        >
                        </FoodCard>
                    })
                }
            </div>
        </div>
    );
};

export default ChefDetails;