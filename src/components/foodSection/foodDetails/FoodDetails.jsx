import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const FoodDetails = () => {
    const [itemData, setItemData] = useState({})
    const [favorite, setFavorite] = useState(false)
    const [rating, setRatings] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://cookpanda-backend-muhammad-naim.vercel.app/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setItemData(data)
                setRatings(data?.ratings)
            })
            .catch(error => navigate('/error'))
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { name, foodImageURL, ingredients, description, cookingMethod } = itemData;
    const notify = () => toast.success('Added to favorite', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    return (
            <div className="hero min-h-screen bg-base-200 rounded-md">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:gap-6 ">
                    <LazyLoad placeholder={<progress className="progress w-56"></progress>}>
                        <img src={foodImageURL} className="lg:max-w-full mx-auto rounded-md shadow-2xl" />
                    </LazyLoad>
                    <div >
                        <div className="flex items-center">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <div className="tooltip  tooltip-right bg-transparent text-black" data-tip="Add to Favorite">
                                <button
                                    className={" m-2 bg-transparent hover:bg-transparent"}

                                    onClick={() => {
                                        setFavorite(true)
                                        notify()
                                    }}
                                    disabled={favorite}
                                >
                                    {favorite ? <FaHeart className="text-red-700 text-lg" /> : <FaRegHeart className="text-lg" />}
                                </button>
                                <ToastContainer />
                            </div>
                        </div>
                        <p className="">{description}</p>
                        <ul className='list-disc'><span className="font-semibold">Ingredients:</span>
                            {
                                (ingredients)?.map((item, index) => <li key={index} className='ms-14 '>{item}</li>)
                            }
                        </ul>
                        <p><span className='font-semibold'>Cooking Method:</span> {cookingMethod}</p>
                        <div className=''>
                            <p><span className="font-semibold">Rating:</span>{rating && parseFloat(rating).toPrecision(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default FoodDetails;