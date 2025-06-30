// * Dependencies
// import { useState } from 'react';

// * Other Components

// * Other Imports
import './BulletItem.component.scss';

// * Component Props
interface BulletItemProps {
  name: string,
  imgURL: string,
  category: 'items' | 'materials';
};

// * Component
export default function BulletItem({ 
  name,
  imgURL,
  category
}: BulletItemProps) {
  // * Variables

  // * Helper Functions

  // * Rendering
  return (
    <div
      className="BulletItem"
    >
      <img
        className="image"
        src={`images/${category}/${imgURL}.png`}
        alt={name} 
      />
      <div
        className="name"
      >
        {name}
      </div>
    </div>
  );
};
