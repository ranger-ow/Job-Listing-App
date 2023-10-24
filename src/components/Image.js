import React from 'react'

function Image({ url, desc = '' }) {
    return (
        <div className="flex justify-center items-center w-20 sm:w-24 h-20  sm:h-24 p-2 rounded-lg object-fill">
            <img src={url} alt={desc} />
        </div>
    )
}

export default Image