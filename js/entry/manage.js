import { change, initLight } from "../load";
initLight();
import { s, initSelect, updateSelectBox } from "../select"
import { showLastSpecified, generate, addProperty } from "../videoManager"
initSelect(showLastSpecified);
for (let index = 0; index < s.length; index++) {
	const sb = s[index];
	sb.onchange = () => updateSelectBox(index);
}
lightSwitch.onclick = change;
document.getElementById("selectItem").onsubmit = (event) => {
	event.preventDefault();
	initSelect(showLastSpecified);
};
document.getElementById("generateJSON").onclick = generate;
document.getElementById("tagAddProperty").onclick = addProperty;