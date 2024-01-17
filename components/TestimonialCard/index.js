import React from "react";
const TestimonialCard = ({ img, name, info, testimonial, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 laptop:h-40 laptop:w-40 mob:h-20 mob:w-20 mr-4"       
      >
        <img
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <div>
        <h1 className="mt-5 text-3xl font-medium mob:text-2xl">
          {name ? name : "Client Name"}
        </h1>
        <h2 className="text-xl opacity-50 mob:text-lg">
          {info ? info : "Information"}
        </h2>
        {/* <h2 className="text-xl opacity-50 mob:text-lg">
          {testimonial ? testimonial : "Testimonial"}
        </h2> */}
      </div>
    </div>
  );
};
export default TestimonialCard;