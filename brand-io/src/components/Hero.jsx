import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen text-black'>
            <div className='flex justify-around items-center h-24'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        brand.io
                    </h1>
                </div>
                <div className='flex gap-8'>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                </div>
                <div className='flex gap-4'>
                    <button>
                        Login
                    </button>
                    <button className='bg-green-500 text-white px-6 py-2'>
                        Sign Up
                    </button>
                </div>
            </div>
            <section className='px-28 h-full'>
                <div className='flex items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-7xl font-bold px-8'>
                            Tell a <span className='text-green-500'>better brand </span>story
                        </h1>
                        <p className="px-8 my-4 mr-28">
                            Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.
                        </p>
                        <div className="flex gap-6 px-8 my-4">
                            <button className='bg-green-500 text-white text-xl px-6 py-2'>
                                Expolre More
                            </button>
                            <button className='text-green-500 text-xl'>
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-end'>
                        <div className=''>
                            <img className='' style={{height: '80vh'}} src="https://s3-alpha-sig.figma.com/img/3c27/927f/67daea87fb959731a55b792b163e8d7a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdKvNr-P-CxE2~teeo~O66Q-kB1qF3Vzsznw7VtEsE6WqX0T~gw1pZH0Ns7Sl6IMR9uyCr~lK4-e668JgUiFFCSnvea0h4nHMc5PwQbAr3~SNzY~GxvwxlIs2jmKr7yq2Sn1sl21sYnx7ub9h6zI4xKDPsEo-qKvRSrdwB38s1LWU450nOx6lrBlUrE9QWh0v7GxLmRO7OETXdvy6xJSiVUq4U~yLhYg0BuAxFOS4KQ~uYCZ5ngtC8OBS~XB86V~yMvk1Lxf7A6cG8ANsLrhBwohWs5E47uvdtV0dZScB0ji4xLOuJPu8XurqmWDOkvJJqP6D5elhnPkrA9~kYqfkw__" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
