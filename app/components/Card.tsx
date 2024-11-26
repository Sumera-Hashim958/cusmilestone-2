'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "@/app/styles/card.css";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check the initial window width and set the screen size
    setIsLargeScreen(window.innerWidth >= 640);

    // Function to handle resizing
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`card ${isLargeScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isLargeScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
