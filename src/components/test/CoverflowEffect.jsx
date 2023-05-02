import React, { useContext } from 'react';
import './style.css'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { loaderContext } from '../../loader/Loader';
const CoverflowEffect = () => {
  const { foodItems } = useContext(loaderContext)
  console.log(foodItems);
  const data = foodItems.find(it => it.foodID == 'a')
  console.log(data);
  return (
    <div>
      <div className=" w-1/5 h-20 my-8">
        <div className="our-team overflow-hidden text-center ">
          <div className="pic">
            <img src="https://images.deliveryhero.io/image/fd-bd/LH/s2hm-hero.jpg"
              className=" w-full h-full  scale-100 transition-all ease-in-out duration-200 delay-0  "
            />
            <div className="absolute top-0 w-full h-full opacity-0 bg-amber-400/50 transition-all ease-in-out duration-200 delay-0 hover:opacity-100">
              <div className="optional relative top-0">
                <h3 className="text-white text-lg font-semibold my-1">KEVIN PETERSON</h3>
                <span className="post">CIVIL ENGINEER</span>
                <span className='post'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, debitis sapiente accusamus repellendus asperiores nobis laborum numquam voluptas ipsam fugiat!</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverflowEffect;