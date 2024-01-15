import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {

  return (
    <div className="mt-5 w-full flex mob:grid-cols-1 desktop:flex-row justify-between">
      <div className="text-lg w-1/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-4/5">
        <h2 className="text-lg font-bold">{position}</h2>
        <p>{bullets}</p> {/* Render bullets as a single string */}
      </div>
    </div>
  );
};

export default ProjectResume;
