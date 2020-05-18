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

var on;

function turnOn() {
    linkSchemeStyle.href = "./light.css";
    on = true;
}

function turnOff() {
    linkSchemeStyle.href = "./dark.css";
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