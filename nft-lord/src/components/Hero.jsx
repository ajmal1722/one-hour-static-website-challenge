import Button from "./Button"

const Hero = () => {
    
    return (
        <div className='flex justify-center items-center text-white mx-20'>
            <div className='w-1/2'>
                <h1 className='text-5xl font-bold my-16'>
                    Discover,Collect & Sell Popular 
                </h1>
                <p className='text-xl'>
                    The world’s Biggest advanced commercial center for Crypto collectibles and non-fungible tokens.
                </p>
                <div className='my-12 flex' >
                    <Button value={"Expolore"} />
                </div>
            </div>
            <div className='w-1/2' >
                <img className='monkeyImg' src="https://s3-alpha-sig.figma.com/img/8e56/0dd1/79b1c53c3ae1f3a0fc1741193c42c8f9?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3XHUhlYlQn8WYKXE7xMpPTbpAFoMlTLy5~D6Aj6wlGtY7Rek9TvCSe0iS24Ge5uoSoFJ87o0M2~lgHGpJMYy9ksHv1haWmbxwCyRFtiHw34Y0KC8IEyE69tmBgUKbXb7IAXc-h4u5kSETpVluiOAUkcqQrP-cEs5XJpCRbYE0N24pD7YVCcS~-Kij1L~ZzHJ4EP2c3aLjpG7ByNRA8uCTsACxXcbOB5ybaf-9HDnAE~P0vDaz6fyMoJ5ipc7X45xYwUfgHjSeMjJABA2ED3qRz0ZVWcylAovP9hSJMGy8nlUFaJPVLiDBABGENBAPorfWuJAJfHae6PhXiEBos-WQ__" alt="" />
            </div>
        </div>
    )
}

export default Hero
