import React from 'react';

export default function Features() {
  const randomColors = [
    "rgb(255, 0, 0)",        // Red
    "rgb(0, 255, 0)",        // Green
    "rgb(0, 0, 255)",        // Blue
    "rgb(255, 255, 0)",      // Yellow
    "rgb(255, 0, 255)",      // Magenta
    "rgb(0, 255, 255)",      // Cyan
    "rgb(255, 165, 0)",      // Orange
    "rgb(128, 0, 128)",      // Purple
    "rgb(0, 128, 0)",        // Dark Green
    "rgb(0, 0, 128)"         // Navy Blue
  ];

  const bulletColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  const khwBenefitsPack = {
    features: [
      "Comprehensive Routes For Navigation",
      "Real-Time Traffic Updates",
      "Real-Time Traffic Alerts",
      "Gives You The Best Route To Your Destination",
      "Save Your Favorite Places",
    ],
  };

  const features = khwBenefitsPack.features.map((feature, index) => (
    <li key={index}>
      <div style={{ backgroundColor: bulletColor }}></div>
      {feature}
    </li>
  ));

  return (
    <section className='container'>
      <h2 className='text-center' >Why <span className="text-teal-600 font-bold">Traffic Watch</span>?</h2>
          <h2>Features</h2>
        <div className="features">
          <li className='text-teal-600'>{features}</li>
        </div>
    </section>
  );
}
