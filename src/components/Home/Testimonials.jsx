import React from "react";
import Stars from "./Stars";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Omkar Tidke",
      message:
        "Great way IT Solutions India Pvt.Ltd is the best place to work. I have joined as Java Developer 3.5 years ago awesome experience and a good journey",
      stars: 5,
    },
    {
      id: 2,
      name: "rahul",
      message:
        "Thank you for transforming my wedding dress into the perfect fit,. You made the process stress-free and enjoyable",
      stars: 5,
    },
    {
      id: 3,
      name: "harshal",
      message:
        "Always impressed with the quality and attention to detail. They never fail to deliver exceptional service",
      stars: 5,
    },
    {
      id: 4,
      name: "ravikant ",
      message:
        "Always impressed with the quality and attention to detail. They never fail to deliver exceptional service",
      stars: 5,
    },
  ];

  return (
    <main className="bg-gray-700 p-5">
      <div className="flex p-5 justify-center text-white">
        <h1 className="text-4xl font-black">Review's</h1>
      </div>
      <div className="flex flex-wrap gap-5 bg-gray-700 p-6">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="flex max-w-md flex-col overflow-hidden rounded-lg shadow-xl transition transform hover:scale-105 ease-in-out duration-300"
            >
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8">
                <Stars />
                <blockquote className="flex-1">
                  <p className="text-lg leading-relaxed text-gray-900">
                    “{review.message}”
                  </p>
                </blockquote>

                <div className="flex items-center">
               
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Testimonials;
