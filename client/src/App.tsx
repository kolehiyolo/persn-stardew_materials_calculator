// * Dependencies
import { useState } from 'react';
import { useEffect } from 'react';

// * Other Components

// * Other Imports
import type { Material } from './types';
import type { Item } from './types';
import type { Ingredient } from './types';
import './styles/App.scss';

// * Component
export default function App() {
  // ! const [materials, setMaterials] = useState<Material[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Load both JSON files in parallel
    Promise.all([
      fetch('/data/materials.json').then(res => res.json()),
      fetch('/data/items.json').then(res => res.json())
    ])
      .then(([materialData, itemDataRaw]) => {
        // ! Store material list
        // ! setMaterials(materialData);

        // Convert item material names to full Material objects
        const itemData: Item[] = itemDataRaw.map((item: Item) => ({
          ...item,
          ingredients: item.ingredients.map((ingredient: Ingredient) => {
            const matchedMaterial = materialData.find(
              (mat: Material) => {
                return mat.name === ingredient.name;
              }
            );
            console.log(matchedMaterial);
            return {
              material: matchedMaterial || { id: '', name: ingredient.material, imgURL: '' },
              quantity: ingredient.quantity
            };
          })
        }));

        setItems(itemData);
      })
      .catch(err => {
        console.error('Failed to load mock data:', err);
      });
  }, []);

  return (
    <div className="App">
      <main className="main">
        <div className="left">
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
                  {items.map(item => (
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
        </div>
      </main>
    </div>
  );
};