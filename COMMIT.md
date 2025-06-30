add input to RecipeRow
1. alright awesome this works now
2. we just need a header for the table
3. i also ran into this dilemma while setting the helper function, in that I want to make sure that all variables, states, and functions i make moving forward are typed immaculately, but i hate the default typescript syntax of typing arrow functions
  3.1. what i ended up deciding, as a rule, is that helper functions will always be function declarations (as they're cleaner to read), and using arrow functions is a case-by-case, such as when chaining array functions (.map(), .find(), etc)