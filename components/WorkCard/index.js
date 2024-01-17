import React from "react";

const WorkCard = ({ img, name, dates, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 laptop:h-60 mob:h-40"       
        // style={{ height: "300px"}}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium mob:text-2xl">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 mob:text-lg">
        {dates ? dates : "Dates"}
      </h2>
    </div>
  );
};

export default WorkCard;
