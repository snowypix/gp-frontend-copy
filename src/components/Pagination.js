import React from 'react';

const Pagination = () => {
    return (
        <div className="flex justify-center items-center gap-2 my-4">
            <img
                className="rounded opacity-50 cursor-pointer"
                alt="Previous page"
                src="/page-prev@2x.png" // Ensure you have the correct asset
            />
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className={`rounded bg-white border border-gainsboro text-black ${index === 0 ? 'font-bold' : ''} cursor-pointer`}
                    style={{ padding: '0.5rem', width: '2.5rem', height: '2.5rem', lineHeight: '2rem', textAlign: 'center' }}
                >
                    {index + 1}
                </div>
            ))}
            <img
                className="rounded cursor-pointer"
                alt="Next page"
                src="/page-next@2x.png" // Ensure you have the correct asset
            />
        </div>
    );
}

export default Pagination;
