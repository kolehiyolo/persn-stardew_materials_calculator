// * Dependencies
// import { useState } from 'react';
import type { ChangeEvent } from 'react';

// * Other Components
import BulletItem from './BulletItem.component';

// * Other Imports
import type { Item } from '../../types';
import './RowRecipe.component.scss';

// * Component Props
interface RowRecipeProps {
  item: Item,
  handleRowRecipeInputChange: (itemID: string, itemQuantity: number) => void 
};

// * Component
export default function RowRecipe({ 
  item,
  handleRowRecipeInputChange
}: RowRecipeProps) {
  // * Variables
  
  // * Helper Functions
  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const value: number = Number(e.target.value);
    handleRowRecipeInputChange(item.id, value);
  };

  // * Rendering
  return (
    <tr 
      className="RowRecipe"
    >
      <td
        className="Item"
      >
        <BulletItem
          name={item.name}
          imgURL={item.imgURL}
          category="items"
        />
      </td>
      <td
        className="ingredients"
      >
        <ul>
          {item.ingredients.map((ing, idx) => (
            <li
              key={idx}
              className='Ingredient'
            >
              <BulletItem
                name={ing.material.name}
                imgURL={ing.material.imgURL}
                category="materials"
              />
              <div
                className="quantity"
              >
                x{ing.quantity}
              </div>
              <div
                className="quantityTotal"
              >
                x{ing.quantity * item.quantity}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td
        className="quantity"
      >
        <input
          type="number"
          onChange={handleInputChange}
          min={0}
          step={1}
          value={item.quantity}
        />
      </td>
    </tr>
  );
};
