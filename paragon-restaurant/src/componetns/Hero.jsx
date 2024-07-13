import { IoMdMenu } from "react-icons/io";
import HeroTextContent from "./HeroTextContent";

const Hero = () => {
    return (
        <div className='hero-section text-white'>
            <div className='flex justify-between mx-10 py-10'>
                <div>
                    <h1 className="text-md font-semibold">
                        ORDER ONLINE
                    </h1>
                    <h1 className="text-md font-semibold">
                        FEED BACK
                    </h1>
                </div>
                <img src="https://paragonrestaurant.in/wp-content/uploads/2022/10/paragon-restaurant-logo.png" alt="" />
                <IoMdMenu className="text-4xl mr-5 cursor-pointer" />
            </div>
            <HeroTextContent />
        </div>
    )
}

export default Hero
