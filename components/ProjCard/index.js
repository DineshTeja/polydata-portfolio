import React from "react";

const ProjCard = ({ img, name, dates, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-0 laptop:p-0 first:ml-0 link"
      onClick={onClick}
    >
      <h1 className="mt-5 text-2xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-l opacity-50">
        {dates ? dates : "Dates"}
      </h2>
      <h2 className="text-l">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default ProjCard;
