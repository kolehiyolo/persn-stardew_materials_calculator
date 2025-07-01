// * Dependencies
// import { useState } from 'react';

// * Other Components

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
            <tr>
              <td
                className="Item"
              >
                Placeholder Material #1
              </td>
              <td
                className="quantityYouNeed"
              >
                ####
              </td>
            </tr>
            <tr>
              <td
                className="Item"
              >
                Placeholder Material #1
              </td>
              <td
                className="quantityYouNeed"
              >
                ####
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
