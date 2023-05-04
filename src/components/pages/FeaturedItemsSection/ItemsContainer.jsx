import React, { useContext } from 'react';
import { loaderContext } from '../../../loader/Loader';

const ItemsContainer = () => {
    const { foodItems } = useContext(loaderContext)
    const topRated = foodItems.filter(item => item.ratings > 4.5)
    const prefered = foodItems.filter(item => item.ratings > 4.2)
    console.log(topRated);

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 p-4 bg-[#f3d8d6] rounded-md'>
            <div className='flex flex-col'>
                <h3 className='text-lg my-3 '>Top rated</h3>
                {
                    topRated.map(item => {
                        return <div key={item?.foodID} className='flex items-center '>
                            <div className='w-8 '>
                                <img src={item.foodImageURL} className='w-full my-auto' />
                            </div>
                            <div className='ml-4'>
                                <p>{item.name}</p>
                                <p>{item.ratings}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <div className='flex flex-col'>
                <h3 className='text-lg my-3 '>Most recent</h3>
                    {
                        foodItems.map(item => {
                            return <div key={item?.foodID} className='flex items-center m'>
                                <div className='w-8 rounded-sm'>
                                    <img src={item.foodImageURL} className='w-full my-auto' />
                                </div>
                                <div className='ml-4'>
                                    <p>{item.name}</p>
                                    <p>{item.ratings}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                <h3 className='text-lg my-3 '>Chef's preference</h3>
                    {
                        prefered.map(item => {
                            return <div key={item?.foodID} className='flex items-center m'>
                                <div className='w-8 rounded-sm'>
                                    <img src={item.foodImageURL} className='w-full my-auto' />
                                </div>
                                <div className='ml-4'>
                                    <p>{item.name}</p>
                                    <p>{item.ratings}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemsContainer;