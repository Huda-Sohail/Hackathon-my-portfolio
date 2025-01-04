import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  width: number;  
  height: number;
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, width, height }) => {
  return (
    <div className="card" data-aos="zoom-in">
      <div className="image-container">
        <Image
          src={img}  // image path
          alt={title}  // alt text
          width={width}  // dynamic width
          height={height}  // dynamic height
          className="w-full h-auto"
        />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>

      {/* Tags container */}
      <div className="tags flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag px-4 py-2 rounded-full text-xs text-white ${getTagColorClass(index)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const getTagColorClass = (index: number) => {
  switch (index) {
    case 0:
      return 'bg-[#0abde3]'; // First tag background color
    case 1:
      return 'bg-[#a55eea]'; // Second tag background color
    case 2:
      return 'bg-[#db9f10]'; // Third tag background color
    case 3:
      return 'bg-[#eb4d4b]'; // Fourth tag background color
    default:
      return 'bg-gray-500'; // Default background color for any additional tags
  }
};

export default Card;
