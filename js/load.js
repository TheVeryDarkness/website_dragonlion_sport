if (process.env.NODE_ENV == "development") alert("load.js begin");
export { change };
import { get, set } from "./localStorage";
import "../css/basic.css";//Non-lazy
import { default as dark } from "../css/dark.css";//lazy
import { default as light } from "../css/light.css";//lazy
light.use();
dark.use();
{
	var curtainStyle = document.getElementById("curtain");
	if (curtainStyle)
		curtainStyle.remove();
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
	if (on) {
		asDark(lightIndication);
		set("scheme", "dark");
	} else {
		asLight(lightIndication);
		set("scheme", "light");
	}
}
(() => {
	const s = get("scheme");
	if (s == "dark")
		return turnOff();
	else if (s == "light")
		return turnOn();

	if (window.matchMedia) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches)
			return turnOff();
		else if (window.matchMedia("(prefers-color-scheme: light)").matches)
			return turnOn();
		else if (window.matchMedia("(prefers-color-scheme: no-preference)").matches)
			return turnOn();
	}

	{
		var date = new Date();
		if (date.getHours() >= 22 || date.getHours() <= 6)
			return turnOff();
		else return turnOn();
	}
})();
if (process.env.NODE_ENV == "development") alert("load.js end");