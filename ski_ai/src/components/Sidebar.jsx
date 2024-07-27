import ProfileSection from "./ProfileSection";
import OptionCard from "./OptionCard";
import optionData from "../data/data";

const Sidebar = () => {
    return (
        <div className='col-span-2'>
            <ProfileSection />
            {
                optionData.map((data, index) => (
                    <OptionCard key={index} data={data} />
                ))
            }
        </div>
    )
}

export default Sidebar
