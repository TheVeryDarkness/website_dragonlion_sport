import { rootPath } from "./root"
export { initLight, change };

import("../css/basic.css")
const dark = require("../css/light.css");
const light = require("../css/light.css");
function initLight() {
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
}

var on;

function turnOn() {
	linkSchemeStyle.href = dark;
	on = true;
}

function turnOff() {
	linkSchemeStyle.href = light;
	on = false;
}

function asDark() {
	turnOff();
	lightIndication.innerText = "一熄灯一切被纪念";
}

function asLight() {
	turnOn();
	lightIndication.innerText = "一开灯一切变妄念";
}

function change() {
	if (on) asDark();
	else asLight();
}