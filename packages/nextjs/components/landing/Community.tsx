import Link from 'next/link'
import React from 'react'


const Community = () => {
    return (
        <div className='container flex flex-col items-center gap-5 md:gap-10'>
            <div className='text-[20px] md:text-[36px] font-bold'>Join the AURAX Community</div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 justify-center'>
                <Link className='bg-[#fff3] rounded-md py-2 px-4 text-[20px] flex flex-row gap-3 items-center justify-center hover:bg-[#ffffff6b] cursor-pointer' href="">
                    <img src={'/discord.svg'} />
                    <span className='text-[16px] leading-7'>Join Our Discord</span>
                </Link>
                <Link className='bg-[#fff3] rounded-md py-2 px-4 text-[20px] flex flex-row gap-3 items-center justify-center hover:bg-[#ffffff6b] cursor-pointer' href="">
                    <img src={'/twitter.svg'} />
                    <span className='text-[16px] leading-7'>Follow us on X</span>
                </Link>
                <Link className='bg-[#fff3] rounded-md py-2 px-4 text-[20px] flex flex-row gap-3 items-center justify-center hover:bg-[#ffffff6b] cursor-pointer' href="">
                    <img src={'/github.svg'} />
                    <span className='text-[16px] leading-7'>Contribute to Aurax</span>
                </Link>
            </div>
        </div>
    )
}

export default Community