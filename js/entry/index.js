import { change } from "../load";
const Switch = document.getElementById("lightSwitch");
Switch.onclick = () => { change(Switch); };
import { loadFromSelected } from "../videoDisplayer";
import { initSelect, updateSelectBox } from "../select";
initSelect(loadFromSelected);
import { showActions, chooseSearch, goSearch, searchInAllNodes } from "../search";
showActions();
import { s } from "../select"
for (let index = 0; index < s.length; index++) {
	const sb = s[index];
	sb.onchange = () => updateSelectBox(index);
}
import { switchDisplayMode } from "../videoDisplayer";
document.getElementById("chooseItem").onsubmit = (event) => {
	event.preventDefault();
	initSelect(loadFromSelected)
};
document.getElementById("playMode").onclick = switchDisplayMode;
document.getElementById("replayVideo").onclick = loadFromSelected;
document.getElementById("chooseAction").onsubmit = (event) => {
	event.preventDefault();
	a3.selectedIndex < 0 ? showActions() : goSearch(a3.options[a3.selectedIndex].text)
};
document.getElementById("searchName").onsubmit = (event) => {
	event.preventDefault();
	searchInAllNodes(textSearchInAll.value);
};
document.getElementById("textSearchInAll").oninput = () => searchInAllNodes(textSearchInAll.value);
document.getElementById("searchResults").onchange = chooseSearch;