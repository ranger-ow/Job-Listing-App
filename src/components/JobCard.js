import React from 'react'
import Details from './Details'

function JobCard({listing, filtering}) {
    // const rules = `bg-white ${listing.featured ? 'featured-item' : ''} lg:max-w-4xl sm:max-w-xs bg-red-300 mb-10 shadow-lg p-4 flex justify-center items-center`

    return (
        <div className=" max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-lg mb-4 md:mb-6 sm:mb-4 lg:mb-10 shadow-lg p-4 flex justify-center items-center ">
           
            <Details
                logo={listing.logo}
                company={listing.company}
                recent={listing.new}
                desc={listing.desc}
                featured={listing.featured}
                position={listing.position}
                contract={listing.contract}
                location={listing.location}
                languages={listing.languages}
                tools={listing.tools}
                filter_f={filtering}
            />
        </div>
    )
}

export default JobCard