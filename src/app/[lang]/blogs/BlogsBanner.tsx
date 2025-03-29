"use client";
import React from "react";

function BlogsBanner() {
  return (
    <div className="blogs-banner">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-12 px-5 md:py-44">
          <div className="text-center font-extrabold text-2xl md:text-5xl text-white">
            Blog Articles & Insights
          </div>
          <div className="text-center pt-4 font-medium text-sm max-w-screen-sm mx-auto text-white">
            {" "}
            Global Salah is your go-to platform for accurate prayer times
            worldwide, along with a rich collection of features to enhance your
            spiritual journey. From prayer calendars and essential duas to
            community forums and live broadcasts, we provide reliable,
            insightful, and engaging content to support and inspire Muslims
            around the globe.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner;
