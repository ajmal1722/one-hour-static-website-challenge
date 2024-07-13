import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecommendedSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className=''>
            <div className=''  data-aos="zoom-in-right">
                <h1 className="font-extrabold text-8xl text-red-950 text-center py-20">
                    Chosen among highly recommended Restaurants
                </h1>
            </div>
            <div className="flex justify-center gap-16">
                <div className="w-2/6 my-6" data-aos="flip-down">
                    <img src="https://paragonrestaurant.in/wp-content/uploads/2023/03/about-paragon.png" alt="" />
                </div>
                <div className="w-2/6 text-red-950" data-aos="flip-up">
                    <h1 className="text-3xl font-semibold my-6">
                    ABOUT PARAGON GROUP
                    </h1>
                    <hr className="mr-5" />
                    <p className="text-gray-600 mt-5">
                    Established in 1939, Paragon boasts an unmatched heritage in culinary excellence. From classic delicacies of the region to innovative fusion of multinational cuisines, Paragon has been a delectable part of happy memories for families in Kerala and the UAE.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedSection
