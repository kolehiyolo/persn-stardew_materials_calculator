// * Dependencies
import { useState } from 'react';
import { useEffect } from 'react';

// * Other Components
import CraftingTable from './components/containers/CraftingTable.component';

// * Other Imports
import type { Material } from './types';
import type { Item } from './types';
import type { Ingredient } from './types';
import './styles/App.scss';

// * Component
export default function App() {
  // # States
  // * Constant On Mount
  // ! const [materials, setMaterials] = useState<Material[]>([]);
  const [constItems, setConstItems] = useState<Item[]>([]);

  // # triggerOnMount
  useEffect(() => {
    // Load both JSON files in parallel
    Promise.all([
      fetch('/data/materials.json').then(res => res.json()),
      fetch('/data/items.json').then(res => res.json())
    ])
      .then(([fetchedMaterialsData, fetchedItemsData]: [Material[], Item[]]) => {
        // ! Store material list
        // ! setMaterials(materialData);

        // Loop through all items to convert item.ingredients[].names to full Material objects
        const itemsData: Item[] = fetchedItemsData.map(
          (item: Item) => {
            // Loop through each ingredient to find the matching fetchedMaterialsData[] item
            const prcsdIngredients: Ingredient[] = item.ingredients.map(
              (ingredient: Ingredient) => {
                // Find match, and set it to "Material Not Found" if no match
                const matchedMaterial: Material = fetchedMaterialsData.find(
                  (mat: Material) => {
                    return mat.name === ingredient.name;
                  }
                ) || {
                  id: '',
                  name: 'Material Not Found',
                  imgURL: 'Material Not Found',
                };

                // Set item.ingredients[n] with right .material
                // Set it to "Material Not Found" if no match is found
                return {
                  name: ingredient.name,
                  material: matchedMaterial,
                  quantity: ingredient.quantity
                };
              }
            );

            // Finalize each itemData
            const itemData: Item = {
              ...item,
              ingredients: prcsdIngredients
            }

            return itemData;
          }
        );

        // Set collected itemsData to state
        setConstItems(itemsData);
      })
      .catch(err => {
        console.error('Failed to load mock data:', err);
      });
  }, []);

  // # Rendering
  return (
    <div className="App">
      <main className="main">
        <div className="left">
          <CraftingTable
            constItems={constItems}
          />
        </div>
      </main>
    </div>
  );
};