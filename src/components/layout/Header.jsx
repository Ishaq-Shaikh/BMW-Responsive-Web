import m5 from '../../assets/home-image.jpg'

function Header() {
    return (
        <>
            <div className='bg-cover bg-center lg:h-screen bg-no-repeat h-[400px] sm:h-[640px] md:h-[768px] overflow-x-hidden overflow-y-hidden' style={{
                backgroundImage: `url(${m5})`
            }}>
                <div className='flex items-center justify-center h-screen text-white'>
                    <div className='space-y-15 sm:mt-50'>
                        <h1 className='text-3xl font-bold ml-6 sm:ml-12 sm:text-4xl md:text-5xl text-center w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] lg:text-6xl'>The Ultimate Driving Machine</h1>
                        <div className='space-x-8 mx-12 lg:mx-26'>
                            <button className='font-semibold bg-[#0066b1] w-[30vw] h-[8vh] rounded-4xl active:bg-[#75bff3] hover:cursor-pointer sm:w-[22vw] lg:w-[15vw]'>Contact US</button>
                            <button className='font-semibold bg-[#5c5c5c] w-[20vw] h-[8vh] rounded-4xl active:bg-[#3a3636] hover:cursor-pointer lg:w-[10vw]'>Deals</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header