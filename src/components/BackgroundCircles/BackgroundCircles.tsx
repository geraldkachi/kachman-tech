import React from 'react'

const BackgroundCircles = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-bounce" />
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-" />
            <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-spin" />
            <div className="absolute border border-[#065373] rounded-full h-[650px] w-[650px] mt-52 animate-pulse]" />
            <div className="absolute border border-[#333333] rounded-full h-[750px] w-[750px] mt-52" />
        </div>
    )
}

export default BackgroundCircles
