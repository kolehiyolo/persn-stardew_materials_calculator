// * Dependencies
// import { useState } from 'react';

// * Other Components
import RowRecipe from './RowRecipe.component';

// * Other Imports
import type { Item } from '../../types';
import './TableCrafting.component.scss';

// * Component Props
interface TableCraftingProps {
  prcsdItems: Item[],
  setPrcsdItems: React.Dispatch<React.SetStateAction<Item[]>>,
};

// * Component
export default function TableCrafting({ 
  prcsdItems,
  setPrcsdItems,
}: TableCraftingProps) {
  // * Variables

  // * Helper Functions
  function handleRowRecipeInputChange(itemID: string, itemQuantity: number): void {
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
    <div className="TableCrafting">
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
              <RowRecipe
                key={item.id}
                item={item}
                handleRowRecipeInputChange={handleRowRecipeInputChange}
              />
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
};
