// * Dependencies
// import { useState } from 'react';

// * Other Components

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
                  <img
                    className="image"
                    src={"/images/items/"+item.imgURL+".png"}
                    alt={item.name} 
                  />
                  <div
                    className="name"
                  >
                    {item.name}
                  </div>
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
                        <img
                          className="image"
                          src={"/images/materials/"+ing.material.imgURL+".png"}
                          alt={ing.material.imgURL} 
                        />
                        <div
                          className="name"
                        >
                          {ing.material.name}
                        </div>
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
