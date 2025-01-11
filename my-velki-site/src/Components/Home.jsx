import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Welcome to My Page</h2>
          <p className="text-gray-700 text-center">
            This is a basic setup using React, Tailwind CSS, and DaisyUI.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
