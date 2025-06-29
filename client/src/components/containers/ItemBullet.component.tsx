// * Dependencies
// import { useState } from 'react';

// * Other Components

// * Other Imports
import './ItemBullet.component.scss';

// * Component Props
interface ItemBulletProps {
  name: string,
  imgURL: string,
  category: 'items' | 'materials';
};

// * Component
export default function ItemBullet({ 
  name,
  imgURL,
  category
}: ItemBulletProps) {
  // * Variables

  // * Helper Functions

  // * Rendering
  return (
    <div
      className="ItemBullet"
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
