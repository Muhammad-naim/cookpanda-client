import React from 'react';
import { FaArrowRight, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ data }) => {
    const navigate = useNavigate();
    const handleDetailsBtn = (id) => {
        navigate(`/chef/${id}`)
    }
    return (
        <div className="card card-compact !rounded-md shadow-md text-center lg:text-left bg-[#f8dfdd]">
                <figure>
             <LazyLoad  threshold={0.95} >
                    <img
                        src={data.chefPhotoURL}
                        alt={data.chefName}
                        className='rounded-sm w-full'
                    />
            </LazyLoad>
                </figure>
            <div className="card-body !leading-none">
                <h2 className="card-title !leading-1 mx-auto lg:mx-0 text-[#F06B64]">{data.chefName}</h2>
                <p>Experience: {data.yearsOfExperience}</p>
                <p>Items: {data.numOfRecipes}</p>
                <p className='inline-flex mx-auto lg:mx-0'><FaThumbsUp className='inline mr-1 fill-[#F16B64]'/> <span className='inline-block align-baseline '>{data.likes}</span></p>
                <div className="card-actions justify-center lg:justify-start">
                    <button className="btn bg-[#FF7B74] hover:bg-[#e96b64] btn-sm rounded-md" onClick={() => handleDetailsBtn(data.id)}>View Recipes <FaArrowRight className='ml-1' /></button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;