prep state prcsdItems, handle input change with RecipeRow
1. added .quantity to type Item
2. alright i can't even begin to try to explain what i did here, but know that it's working now
3. first, i prepared a new state called prcsdItems
  3.1. this is different from constItems as constItems is the state of the original items data as it was fetched, while prcsditems is mutable
4. I added a new useEffect called triggerNewPrcsdItems, with the intent that this will calculate the total materials needed
5. made it so that CraftingTable accepts prcsdItems and setPrcsdItems as input
  5.1. i think it best that CraftingTable handle the whole processing of prcsdItems, as it is the component (and from what I can so far foresee the ONLY component) that will have the inputs needed to change prcsdItems. TLDR, CraftingTable is the only component where you can update prcsdItems
6. CraftingTable now has handleRecipeRowInputChange()
  6.1. this function takes in 2 inputs, itemID and itemQuantity
  6.2. whenever a RecipeRow's input has been changed, we fetch the itemID of said RecipeRow, and the new itemQuantity
  6.3. we then find the corresponding item within prcsdItems using itemID, and update the .quantity equal to itemQuantity
7. RecipeRow now does not have its own recipeQuantity, as it is now superceded by item.quantity
  7.1. this became real obvious as I realized I'm using 2 variables for the same purpose and declaring and updating them both for the same reasons
  7.2. so, the chain is:
    RecipeRow input is changed
    handleInputChange() is triggered inside RecipeRow
    handleInputChange() processes e into a valid number and assigns it to 'value'
    handleInputChange() triggers handleRecipeRowInputChange(item.id, value)
    CraftingTable handles handleRecipeRowInputChange()
    handleRecipeRowInputChange() uses item.id to find the matching item in prcsdItems
    handleRecipeRowInputChange() updates matching item's .quantity to equal itemQuantity passed
    handleRecipeRowInputChange() runs setPrcsdItems(newPrcsdItems)
    CraftingTable() therefore rerenders RecipeRows with new item values gathered from newPrcsdItems
    RecipeRow values have been updated from RecipeRow iput changing

