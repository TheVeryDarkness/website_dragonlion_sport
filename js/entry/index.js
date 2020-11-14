import { initRoot } from "../root";
initRoot('');
import { change, initLight } from "../load";
initLight();
import { loadFromSelected } from "../videoDisplayer";
import { initSelect, updateSelectBox } from "../select";
initSelect(loadFromSelected);
import { showActions, chooseSearch } from "../search";
showActions();
import { s } from "../select"
for (let index = 0; index < s.length; index++) {
	const sb = s[index];
	sb.onchange = () => updateSelectBox(index);
}
import { switchDisplayMode } from "../videoDisplayer";
document.getElementById("chooseItem").action = () => initSelect(loadFromSelected);
document.getElementById("playMode").onclick = switchDisplayMode;
document.getElementById("chooseAction").action = () => {
	a3.selectedIndex < 0 ? showActions() : goSearch(a3.options[a3.selectedIndex].text)
};
document.getElementById("searchName").action = () => searchInAllNodes(textSearchInAll.value);
textSearchInAll.oninput = () => searchInAllNodes(textSearchInAll.value);
searchResults.onchange = chooseSearch;
lightIndication.onclick = change;