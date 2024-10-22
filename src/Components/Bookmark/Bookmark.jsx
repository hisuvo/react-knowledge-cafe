import React from 'react';

function Bookmark({ bookmark }) {
    const { id, title } = bookmark
    return (
        <div className='mb-4'>
            <h3 className="p-4 text-lg font-semibold bg-white shadow-md rounded-md" key={id}>{title}</h3>
        </div>
    );
}

export default Bookmark;