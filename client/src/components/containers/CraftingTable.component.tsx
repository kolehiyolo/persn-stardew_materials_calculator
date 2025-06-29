// * Dependencies
// import { useState } from 'react';

// * Other Components
import ItemBullet from '../containers/ItemBullet.component';

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
            </tr>
          </thead>
          <tbody>
            {constItems.map(item => (
              <tr 
                className="recipe"
                key={item.id}
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
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
};
