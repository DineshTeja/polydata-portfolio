import React, { useState } from "react";
import Image from 'next/image';

const AdvWorkCard = ({ img, name, dates, description, secondpara, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 w-40 h-40 mr-4"       
      >
        <Image
            src={img}
            alt={name}
            width={500}
            height={500}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
        />
      </div>
      <div>
        <h1 className="mt-5 text-3xl font-medium mob:text-2xl">
          {name ? name : "Client Name"}
        </h1>
        <h2 className="text-xl opacity-50 mob:text-lg">
          {dates ? dates : "Focus"}
        </h2>
        <h2 className="text-xl opacity-90 mob:text-lg">
          {description ? description : "Description"}
        </h2>
        {isExpanded && (
          <h2 className="text-xl mt-5 opacity-90 mob:text-lg">
            {secondpara ? secondpara : "Paragraph"}
          </h2>
        )}
        <button className="text-blue-300 font-bold opacity-90" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};
export default AdvWorkCard;