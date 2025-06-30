// * Dependencies
// import { useState } from 'react';

// * Other Components
import RecipeRow from '../containers/RecipeRow.component';

// * Other Imports
import type { Item } from '../../types';
import './CraftingTable.component.scss';

// * Component Props
interface CraftingTableProps {
  constItems: Item[],
};

// * Component
export default function CraftingTable({ 
  constItems
}: CraftingTableProps) {
  // * Variables

  // * Helper Functions

  // * Rendering
  return (
    <div className="CraftingTable">
      <div className="head">
        <h1 className="Title">What do you want to craft?</h1>
      </div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Ingredients</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {constItems.map(item => (
              <RecipeRow
                key={item.id}
                item={item}
              />
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
};
