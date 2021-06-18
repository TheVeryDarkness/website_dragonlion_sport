declare const lightSwitch: HTMLElement;
declare const chooseItem: HTMLFontElement;
declare const playMode: HTMLInputElement;
declare const replayVideo: HTMLInputElement;
declare const chooseAction: HTMLInputElement;
declare const searchName: HTMLInputElement;
declare const textSearchInAll: HTMLInputElement;
declare const searchResults: HTMLSelectElement;
declare const a3: HTMLSelectElement;
import { change } from "../load";
const Switch = lightSwitch;
Switch.onclick = () => {
 change(Switch);
};
import { loadFromSelected } from "../videoDisplayer";
import { initSelect, updateSelectBox, s } from "../select";
initSelect(loadFromSelected);
import {
 showActions,
 chooseSearch,
 goSearch,
 searchInAllNodes,
} from "../search";
showActions();
for (let index = 0; index < s.length; index++) {
 const sb = s[index];
 sb.onchange = () => updateSelectBox(index);
}
import { switchDisplayMode } from "../videoDisplayer";
chooseItem.onsubmit = (event) => {
 event.preventDefault();
 initSelect(loadFromSelected);
};
playMode.onclick = switchDisplayMode;
replayVideo.onclick = loadFromSelected;
chooseAction.onsubmit = (event) => {
 event.preventDefault();
 a3.selectedIndex < 0
  ? showActions()
  : goSearch(a3.options[a3.selectedIndex].text);
};
searchName.onsubmit = (event) => {
 event.preventDefault();
 searchInAllNodes(textSearchInAll.value);
};
textSearchInAll.oninput = () => searchInAllNodes(textSearchInAll.value);
searchResults.onchange = chooseSearch;
