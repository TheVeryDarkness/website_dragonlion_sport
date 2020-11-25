import { change } from "../load";
document.getElementById("lightSwitch").onclick = change;
import { s, initSelect, updateSelectBox } from "../select"
import { showLastSpecified, generate, addProperty, showJSON } from "../videoManager"
initSelect(showLastSpecified).then(res => { showJSON(); });
for (let index = 0; index < s.length; index++) {
	const sb = s[index];
	sb.onchange = () => updateSelectBox(index);
}
document.getElementById("selectItem").onsubmit = (event) => {
	event.preventDefault();
	initSelect(showLastSpecified);
};
document.getElementById("generateJSON").onclick = generate;
document.getElementById("tagAddProperty").onclick = addProperty;