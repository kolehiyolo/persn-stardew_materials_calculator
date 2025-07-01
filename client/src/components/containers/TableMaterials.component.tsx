// * Dependencies
// import { useState } from 'react';

// * Other Components
import BulletItem from './BulletItem.component';

// * Other Imports
import type { Material } from '../../types';
import './TableMaterials.component.scss';

// * Component Props
interface TableMaterialsProps {
  prcsdMaterials: Material[]
};

// * Component
export default function TableMaterials({ 
  prcsdMaterials
}: TableMaterialsProps) {
  // * Variables

  // * Helper Functions
  console.log(prcsdMaterials)

  // * Rendering
  return (
    <div className="TableMaterials">
      <div className="head">
        <h1 className="title">Here's what you need</h1>
      </div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>You Need</th>
            </tr>
          </thead>
          <tbody>
            {prcsdMaterials.map((material: Material) => (
              <tr
                key={material.id}
              >
                <td
                  className="Item"
                >
                  <BulletItem
                    name={material.name}
                    imgURL={material.imgURL}
                    category="materials"
                  />
                </td>
                <td
                  className="quantityYouNeed"
                >
                  {material.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
