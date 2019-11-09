function solve(meal_cost, tip_percent, tax_percent) {

  let finalCost; 


  /* 
  calculate final cost by adding meal cost with tip cost and tax cost adjusted according to 
  their respecitive precentages and meal cost
  */
  finalCost = Math.floor(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));

  console.log(finalCost);
}


let result = solve(12.00, 20, 30);
