import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] bg-white"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4253297/pexels-photo-4253297.jpeg?auto=compress&cs=tinysrgb)",
          borderRadius:"20px",
         
      }}
    >
      <div className="hero-overlay  bg-opacity-60  bg-black  rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5 text-2xl">
            The Best wedding planner Services in Bangladesh
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
