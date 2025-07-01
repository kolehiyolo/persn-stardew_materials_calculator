// * Dependencies
// import { useState } from 'react';

// * Other Components

// * Other Imports
// import type { Item } from '../../types';
import './TableMaterials.component.scss';

// * Component Props
interface TableMaterialsProps {
  placeholder: string,
};

// * Component
export default function TableMaterials({ 
  placeholder
}: TableMaterialsProps) {
  // * Variables

  // * Helper Functions

  // * Rendering
  return (
    <div className="TableMaterials">
      <div className="head">
        <h1 className="title">Here's what you need</h1>
      </div>
      <div className="body">
        <p>THIS IS WHERE THE BODY GOES</p>
      </div>
    </div>
  );
};
