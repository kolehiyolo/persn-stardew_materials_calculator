FEATURE DONE user can input quantity to items
1. turned off constItems for now as it's now being used and typescript is throwing warnings for unused props/states/variables
  1.1. I even don't exactly imagine what the use would be, maybe a "Reset numbers" functionality?
2. besides that, this feature is done yeyyyyy
3. a lot of the last commit was not really sexy, but it was need to make it so that App.tsx has access to the entire prcsdItems and every little change it experiences, which is then gonna be useful when other components need said updated data
4. before we go into the next feature, there's some more unsexiness that needs to be done, and that is sanity refactoring, namely solidifying and executing a better component naming convention