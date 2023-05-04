import React from 'react';
import { Link } from 'react-router-dom';

const BannerCard = ({ data }) => {
    return (
        <div >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <div className="hero  ">
                        <div className="hero-content flex-col lg:flex-row">
                            <div>
                                <h1 className="text-5xl font-bold">{data.name}</h1>
                                <p className="py-8">{data.description}</p>
                                <Link to={`/items/${data.foodID}`} className="btn btn-sm bg-[#FF7B74] hover:bg-[#e96b64]">See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerCard;