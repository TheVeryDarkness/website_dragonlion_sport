import { change } from '../load'
import { tableActionLevel, actionLevels, actionCategories } from '../getActionTable'
document.getElementById('lightSwitch').onclick = change
const table = document.getElementById('tableAction')
{
  const th = table.createTHead()
  const thr = th.insertRow()
  var blank = thr.insertCell()
  actionLevels.forEach((value) => {
    var thd = thr.insertCell()
    thd.textContent = value
  })
}
actionCategories.forEach((categoryName, categoryIndex) => {
  var maxRows = 0

  tableActionLevel.forEach((difficulty) => {
    const category = difficulty[categoryIndex]
    if (category.length > maxRows) maxRows = category.length
  })
  for (let actionIndex = 0; actionIndex < maxRows; ++actionIndex) {
    const tr = table.insertRow()
    if (actionIndex == 0) {
      var category = tr.insertCell()
      category.rowSpan = maxRows
      category.textContent = categoryName
    }
    for (let difficultyIndex = 0; difficultyIndex < tableActionLevel.length; ++difficultyIndex) {
      var action = tr.insertCell()
      action.textContent = tableActionLevel[difficultyIndex][categoryIndex][actionIndex]
    }
  }
  tableActionLevel.forEach((difficulty, difficultyIndex) => {
    const category = difficulty[categoryIndex]
  })
})
