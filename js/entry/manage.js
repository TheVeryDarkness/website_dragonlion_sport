import { initRoot } from "../root";
initRoot('../');
import { change, initLight } from "../load";
initLight();
import { s, initSelect } from "../select"
import { showLastSpecified, generate } from "../videoManager"
initSelect(showLastSpecified);
for (let index = 0; index < s.length; index++) {
	const sb = s[index];
	sb.onchange = () => showLastSpecified(index);
}
lightSwitch.onclick = change;
document.getElementById("selectItem").action = () => initSelect(showLastSpecified);
document.getElementById("generateJSON").onclick = generate;