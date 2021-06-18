export { tableActionLevel, actionLevels, actionCategories };
import tree = require("../data/tableDifficulty.json");
const tableActionLevel = tree.data; // [difficulty][category][action]
const actionLevels = tree.columns;
const actionCategories = tree.rows;
const numLevels = 3;
const numCategory = 5;
if (tableActionLevel.length != numLevels || actionLevels.length != numLevels)
 console.log("Debug failed! There should be " + numLevels + " levels.");
if (actionCategories.length != numCategory)
 console.log("Debug failed! There should be " + numCategory + " categories.");
for (const level of tableActionLevel)
 if (level.length != numCategory)
  console.log("Debug failed! There should be " + numCategory + " categories.");
