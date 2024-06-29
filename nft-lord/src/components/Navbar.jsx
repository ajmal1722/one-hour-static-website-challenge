import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex justify-between mx-10 h-20 items-center'>
            <div className='color-gradient text-6xl font font-bold'>
                NFT LORD
            </div>
            <div className='text-white font-semibold text-lg flex gap-8'>
                <button>
                    Explore
                </button>
                <button>
                    Explore
                </button>
                <button>
                    Explore
                </button>
                <button>
                    Explore
                </button>
            </div>
            <div className=''>
                <div className='color-gradient border rounded-lg p-2 text-white flex'>
                <CiSearch className="text-2xl" />
                <input type="text"
                    className="color-gradient mx-3 max-w-24"
                    placeholder="serch"
                />
                </div>
            </div>
        </div>
    )
}

export default Navbar
