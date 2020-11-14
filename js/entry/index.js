import { initRoot } from "../root";
initRoot('');
import { initLight } from "../load";
initLight();
import { loadFromSelected } from "../videoDisplayer"
import { initSelect } from "../select";
initSelect(loadFromSelected);
import { showActions } from "../search";
showActions();