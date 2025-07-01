// * Dependencies
import { useState } from 'react';
import { useEffect } from 'react';

// * Other Components
import TableCrafting from './components/containers/TableCrafting.component';
import TableMaterials from './components/containers/TableMaterials.component';

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
  // ! const [constItems, setConstItems] = useState<Item[]>([]);

  // * Processed Variables
  const [prcsdItems, setPrcsdItems] = useState<Item[]>([]);

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
        // ! setConstItems(itemsData);
        setPrcsdItems(itemsData);
      })
      .catch(err => {
        console.error('Failed to load mock data:', err);
      });
  }, []);

  // # triggerNewPrcsdItems
  useEffect(() =>{
    console.log(`triggerNewPrcsdItems()`);
    console.log(`prcsdItems = `);
    console.log(prcsdItems);

    console.log(`this is what should then trigger the processing of materials total`);
  }, [prcsdItems]);

  // # Rendering
  return (
    <div className="App">
      <main className="main">
        <div className="left">
          <TableCrafting
            prcsdItems={prcsdItems}
            setPrcsdItems={setPrcsdItems}
          />
        </div>
        <div className="right">
          <TableMaterials
            placeholder={'placeholder'}
          />
        </div>
      </main>
    </div>
  );
};