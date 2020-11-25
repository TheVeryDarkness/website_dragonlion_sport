export { change };

import "../css/basic.css";//Non-lazy
import { default as dark } from "../css/dark.css";//lazy
import { default as light } from "../css/light.css";//lazy
light.use();
dark.use();
{
	var curtainStyle = document.getElementById("curtain");
	if (curtainStyle)
		curtainStyle.parentNode.removeChild(curtainStyle);
	else console.error("No curtain style");
}

var on;

function turnOn() {
	dark.unuse();
	light.use();
	on = true;
}

function turnOff() {
	dark.use();
	light.unuse();
	on = false;
}

function asDark(lightIndication) {
	turnOff();
	if (lightIndication)
		lightIndication.innerText = "一熄灯一切被纪念";
}

function asLight(lightIndication) {
	turnOn();
	if (lightIndication)
		lightIndication.innerText = "一开灯一切变妄念";
}

function change(lightIndication) {
	if (on) asDark(lightIndication); else asLight(lightIndication);
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches)
	turnOff();
else if (window.matchMedia("(prefers-color-scheme: light)").matches)
	turnOn();
else if (window.matchMedia("(prefers-color-scheme: no-preference)").matches)
	turnOn();
else {
	var date = new Date();
	if (date.getHours() >= 22 || date.getHours() <= 6)
		turnOff();
	else turnOn();
}