declare const lightSwitch: HTMLInputElement;
declare const selectItem: HTMLFormElement;
declare const generateJSON: HTMLFormElement;
declare const tagAddProperty: HTMLHRElement;
import { change } from "../load";
lightSwitch.onclick = change;
import { s, initSelect, updateSelectBox } from "../select";
import {
 showLastSpecified,
 generate,
 addProperty,
 showJSON,
} from "../videoManager";
initSelect(showLastSpecified).then((res) => {
 showJSON();
});
for (let index = 0; index < s.length; index++) {
 const sb = s[index];
 sb.onchange = () => updateSelectBox(index);
}
selectItem.onsubmit = (event) => {
 event.preventDefault();
 initSelect(showLastSpecified);
};
generateJSON.onclick = generate;
tagAddProperty.onclick = addProperty;
