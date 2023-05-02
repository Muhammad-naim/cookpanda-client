import React from 'react';

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
                                <p className="py-8 shadow">{data.description}</p>
                                <button className="btn btn-sm btn-primary">See more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerCard;