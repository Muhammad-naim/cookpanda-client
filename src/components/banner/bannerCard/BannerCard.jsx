import React from 'react';

const BannerCard = ({ data }) => {
    console.log(data);
    return (
        <div >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <div className="hero  ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={data.foodImageURL} className="max-w-sm max-h-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{data.name}</h1>
                                <p className="py-6">{data.description}</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerCard;