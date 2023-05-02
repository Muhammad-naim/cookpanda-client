import React, { useContext, useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { loaderContext } from "../../loader/Loader";
import BannerCard from "./bannerCard/BannerCard";

const Banner = () => {
    const [foodItems, setFoodItems] = useState([])
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('https://cookpanda-backend-muhammad-naim.vercel.app/items')
            .then(res => res.json())
            .then(data => setFoodItems(data))
            .catch(error => console.log(error))
    }, [])


    // const { foodItems } = useContext(loaderContext);
    // console.log(foodItems);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    foodItems.map((item,index) => 
                        <SwiperSlide
                            className="lg:h-1/3"
                            style={{ backgroundImage: `url(${item.foodImageURL})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}
                            key={index}
                        >
                            <BannerCard
                            key={item.id}
                                data={item}
                            >

                            </BannerCard>
                        </SwiperSlide>
                    )
               }
            </Swiper>
        </>
    );
};

export default Banner;