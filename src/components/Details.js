import React, { useState } from 'react'
import Image from "./Image"
import { useNavigate } from 'react-router-dom';

function Details({
    logo,
    company,
    desc,
    recent,
    featured,
    position,
    contract,
    location,
    languages,
    tools,
    filter_f
}) {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(skill) {
        
        filter_f(skill)
    }
    function handleDetails() {

        setIsOpen(prev => !prev);

    }
    function handleApply() {
        navigate("/register");

    }


    const Skills = ({ skill }) => (<div className=" text-xs sm:text-base md:text-lg lg:text-lg rounded-md p-1 px-2 m-2">
        <button className=' rounded' onClick={() => handleClick(skill)}>
            {skill}
        </button>
    </div>)

    return (
        <>
            {isOpen ? <>

                <div className='flex flex-col'>
                    <h1 className='font-semibold text-xl sm:text-sm'>{company}</h1>
                    <div className=" w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-fit text-black whitespace-pre overflow-scroll">{desc}</div>
                    <div className='flex flex-row justify-between items-center'>
                        <button onClick={handleDetails} className=' rounded-lg bg-teal-600 border-2 px-2 mt-2 hover:border-b-slate-600 text-white   font-semibold text-xs lg:text-lg md:text-base sm:text-sm '>Back</button>
                        <button className=' rounded-lg bg-teal-600 border-2 px-2 hover:border-b-slate-600 text-white font-semibold text-xs lg:text-lg md:text-base sm:text-sm '>Apply</button>
                    </div>
                </div>
            </>
                :
                <>
                    <div className='flex flex-col sm:flex-row justify-centre items-center'>
                        <Image url={logo} desc={company} />
                        <div className="flex-row px-0 lg:px-4 md:px-4 sm:px-2 py-2">
                            <div className="flex flex-grow">
                                <p className=" mr-1 sm:mr-8 md:mr-6 lg:mr-6 flex justify-center items-center text-lg lg:text-2xl md:text-2xl  sm:text-lg">{company}</p>
                                {recent ? <p className="text-xs sm:text-sm lg:text-base new-tag rounded-xl text-white  p-2 mr-1">New</p> : null}
                                {featured ? <p className="  text-xs sm:text-sm  lg:text-base  new-tag rounded-lg text-white   p-2">Featured</p> : null}
                            </div>
                            <p className="text-sm lg:text-xl md:text-lg font-semibold text-slate-800 my-2">{position}</p>
                            <div className="flex flex-grow">
                                <small className="text-gray-600 mr-8">{contract}</small>
                                <small className="text-gray-600">{location}</small>
                            </div>
                        </div>

                        <div className="text-xs sm:text-base md:text-lg lg:text-lg flex flex-auto sm:flex-1 lg:flex-1 rounded-sm justify-center mb-2 items-end">
                            {
                                [...languages, ...tools].map(skill => <Skills skill={skill} key={skill} />)
                            }
                        </div>
                        <div className='flex flex-col lg:flex-row md:flex-row sm:flex-col gap-2 sm:gap-1 items-center'>
                            <button onClick={handleDetails} className=' rounded-lg bg-teal-600 border-2 px-2 hover:border-b-slate-600 text-white mx-auto font-semibold text-xs lg:text-lg md:text-base sm:text-xs mr-2'>Details</button>
                            <button onClick={handleApply} className=' rounded-lg bg-teal-600 border-2 px-2 hover:border-b-slate-600 text-white mx-auto font-semibold text-xs lg:text-lg md:text-base sm:text-xs '>Apply</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Details