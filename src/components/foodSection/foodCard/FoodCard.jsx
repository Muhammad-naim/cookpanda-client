import React from 'react';
import './foodCard.css'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const FoodCard = ({ data }) => {
    // console.log(data);
    return (
            <Link to= {`/items/${data.foodID}`}>
                <div className="our-team overflow-hidden text-center rounded-md">
                    <div className="pic">
                        <img
                            src={data.foodImageURL}
                            className=" w-full h-60  scale-100 transition-all ease-in-out duration-200 delay-0 object-cover"
                        />
                        <div className="absolute top-0 w-full h-full opacity-0 bg-amber-400/50 transition-all ease-in-out duration-200 delay-0 hover:opacity-100">
                            <div >
                                <h3 className="text-white text-lg font-semibold my-1">{data.name}</h3>
                            <span className='post'>{data.description}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default FoodCard;