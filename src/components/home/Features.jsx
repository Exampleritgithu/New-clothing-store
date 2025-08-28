import React from "react";
import {
  LockClosedIcon,
  TruckIcon,
  ArrowUturnLeftIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: <LockClosedIcon className="h-10 w-10 text-black mb-4" />,
      title: "Secure Payments",
      description:
        "Shop with confidence knowing that your transactions are safeguarded.",
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-black mb-4" />,
      title: "Free Shipping",
      description:
        "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
    },
    {
      icon: <ArrowUturnLeftIcon className="h-10 w-10 text-black mb-4" />,
      title: "Easy Returns",
      description:
        "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
    },
    {
      icon: <MapPinIcon className="h-10 w-10 text-black mb-4" />,
      title: "Order Tracking",
      description:
        "Stay in the loop with our Order Tracking feature – from checkout to your doorstep.",
    },
  ];

  return (
    <div className="py-36 bg-white z-10 absolute">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 ">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="text-2xl font-serif italic mb-2 ">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
