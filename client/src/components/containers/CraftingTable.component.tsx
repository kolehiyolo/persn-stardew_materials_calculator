// * Dependencies
// import { useState } from 'react';

// * Other Components
import RecipeRow from '../containers/RecipeRow.component';

// * Other Imports
import type { Item } from '../../types';
import './CraftingTable.component.scss';

// * Component Props
interface CraftingTableProps {
  prcsdItems: Item[],
  setPrcsdItems: React.Dispatch<React.SetStateAction<Item[]>>,
};

// * Component
export default function CraftingTable({ 
  prcsdItems,
  setPrcsdItems,
}: CraftingTableProps) {
  // * Variables

  // * Helper Functions
  function handleRecipeRowInputChange(itemID: string, itemQuantity: number): void {
    const newPrcsdItems: Item[] = prcsdItems.map(item => {
      if (item.id === itemID) {
        return { ...item, quantity: itemQuantity };
      }
      return item;
    });

    setPrcsdItems(newPrcsdItems);
  };

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
            {prcsdItems.map(item => (
              <RecipeRow
                key={item.id}
                item={item}
                handleRecipeRowInputChange={handleRecipeRowInputChange}
              />
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
};
