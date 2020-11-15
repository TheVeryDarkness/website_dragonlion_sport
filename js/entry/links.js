import { initRoot } from "../root";
initRoot('../');
import { change, initLight } from "../load";
initLight();
document.getElementById("lightSwitch").onclick = change;