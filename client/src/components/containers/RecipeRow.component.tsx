// * Dependencies
// import { useState } from 'react';
import type { ChangeEvent } from 'react';

// * Other Components
import ItemBullet from '../containers/ItemBullet.component';

// * Other Imports
import type { Item } from '../../types';
import './RecipeRow.component.scss';

// * Component Props
interface RecipeRowProps {
  item: Item,
  handleRecipeRowInputChange: (itemID: string, itemQuantity: number) => void 
};

// * Component
export default function RecipeRow({ 
  item,
  handleRecipeRowInputChange
}: RecipeRowProps) {
  // * Variables
  
  // * Helper Functions
  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const value: number = Number(e.target.value);
    handleRecipeRowInputChange(item.id, value);
  };

  // * Rendering
  return (
    <tr 
      className="RecipeRow"
    >
      <td
        className="Item"
      >
        <ItemBullet
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
              <ItemBullet
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
