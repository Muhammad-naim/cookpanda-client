import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const [itemData, setItemData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://cookpanda-backend-muhammad-naim.vercel.app/items/${id}`)
            .then(res => res.json())
            .then(data => setItemData(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(itemData);
    const { name, foodImageURL, ingredients, ratings, description } = itemData;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={foodImageURL} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="">{description}</p>
                    <ul className='list-disc'><span>Ingredients:</span>
                        {
                            ingredients.map(item => <li className='ms-14'>{item}</li>)
                        }
                    </ul>
                    <p><span className='font-semibold'>Cooking Method:</span> {itemData.cookingMethod}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;