import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const [itemData, setItemData] = useState({})
    const [rating, setRating] = useState(0);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://cookpanda-backend-muhammad-naim.vercel.app/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setRating(data.ratings)
                setItemData(data)
            })
            .catch(error => console.log(error))
    }, [])
    const { name, foodImageURL, ingredients, description, cookingMethod } = itemData;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-2">
                <img src={foodImageURL} className="lg:max-w-full mx-auto rounded-lg shadow-2xl" />
                <div >
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="">{description}</p>
                    <ul className='list-disc'><span>Ingredients:</span>
                        {
                            (ingredients)?.map((item, index) => <li key={index} className='ms-14'>{item}</li>)
                        }
                    </ul>
                    <p><span className='font-semibold'>Cooking Method:</span> {cookingMethod}</p>
                    <div className=''>
                        <p><span className="font-semibold">Rating:</span>{parseFloat(rating).toPrecision(2)}</p>
                        {rating && <ReactStars
                            value={rating}
                            count={5}
                            a11y={false}
                            edit={false}
                            size={24}
                            isHalf={true}
                            activeColor="#ffd700"
                        />}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodDetails;