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
              (mat: Material) => mat.name === ingredient.name
            );
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
    <div className="app">
      <h1>Craftable Items</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <ul>
                  {item.ingredients.map((ing, idx) => (
                    <li key={idx}>
                      {ing.quantity}x {ing.material.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};