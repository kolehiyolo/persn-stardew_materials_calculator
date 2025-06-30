// * Dependencies
// import { useState } from 'react';

// * Other Components
import ItemBullet from '../containers/ItemBullet.component';

// * Other Imports
import type { Item } from '../../types';
import './RecipeRow.component.scss';

// * Component Props
interface RecipeRowProps {
  item: Item
};

// * Component
export default function RecipeRow({ 
  item
}: RecipeRowProps) {
  // * Variables

  // * Helper Functions

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
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
