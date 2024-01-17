import React, { useState } from "react";
import Image from 'next/image';

const PartnerCard = ({ img, name, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-40 w-40 mr-4"       
      >
        <img
            src={img}
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
        />
      </div>
      <div>
        <h2 className="mt-5 text-2xl mob:text-xl">
            {name ? name : "Partner Name"}
        </h2>
      </div>
    </div>
  );
};

export default PartnerCard;