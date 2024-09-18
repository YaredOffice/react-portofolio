import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for Image component

const PortfolioItem = ({ imageSrc, link }) => {
    return (
        <div className="basis-1/3 flex-1 relative group">
            <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={imageSrc}
                alt="Description of image"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            {/* Anchor */}
            <a
                href={link}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                View Work
            </a>
        </div>
    );
};

export default PortfolioItem;
