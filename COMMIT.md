link faux materialsData to new component
1. awesome, so this linking has been done, but some other stuff had to be done as well
2. a major thing is i needed to add a new property to the Material type, quantity, but this might mean that the fetched data from the JSON will have quantity=undefined values, which is no bueno
3. so before handing the fetched data to any of the states or components, i made sure to map through each item and add an explicit quantity=0 value
  3.1. this way, i don't need to freaking add these values to ALL rows in the original JSON, and adding properties later with empty values will also be a breeze
  3.2. i will also do this with items.json because that is an absolute DRAG to have to add the quantity=0 for each freaking item
4. yeah dazit peace now on to the next thing