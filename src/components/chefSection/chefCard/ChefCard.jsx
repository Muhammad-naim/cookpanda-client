import React from 'react';
import {FaArrowRight, FaThumbsUp} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const ChefCard = ({ data }) => {
    const navigate = useNavigate();
    console.log(data);
    const handleDetailsBtn = (id) => {
        navigate(`/chef/${id}`)
    }
    return (
        <div className="card card-compact shadow-md ">
            <figure>
                <img
                    src={data.chefPhotoURL}
                    alt={data.chefName} 
                    className='rounded'
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.chefName}</h2>
                <p>Experience: {data.yearsOfExperience}</p>
                <p>Items: {data.numOfRecipes}</p>
                <p className=' my-1 '>Likes : {data.likes}</p>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary btn-sm rounded-sm" onClick={()=>handleDetailsBtn(data.id)}>View Recipes <FaArrowRight className='ml-1'/></button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;