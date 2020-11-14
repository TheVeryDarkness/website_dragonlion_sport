var specified = {};
function showNode(node) {
	specified = node;
	const ul = document.getElementById("nodeProperties");
	if (!ul) {
		console.error("No display target.");
		return;
	}
	while (ul.childNodes.length > 0) {
		ul.removeChild(ul.lastChild);
	}
	var index = 0;
	for (const key in node) {
		if (node.hasOwnProperty(key)) {
			++index;
			const element = node[key];

			const child = document.createElement("li");

			const label = document.createElement("label");
			label.innerText = key;
			label.for = "display-li-" + index;


			const p = document.createElement("p");
			p.className = "sub";
			var box;
			if (key != "sub") {
				box = document.createElement("input");
				box.value = element;
				box.onchange = (event) => {
					specified[key] = event.target.value;
					console.log(JSON.stringify(tree));
				};
			}
			else {
				var arr = [];
				for (const iterator of element) {
					arr.push(iterator.value);
				}
				box = document.createTextNode(arr);
			}
			box.id = "display-li-" + index;

			p.appendChild(box);
			label.appendChild(p);
			child.appendChild(label);
			ul.appendChild(child);
		}
	}
}
function lastSpecifiedNode(end = s.length) {
	if (s.length < end) { console.error("Out of Range"); end = s.length; }
	var res = -1;
	for (let index = 0; index < end; index++) {
		const element = s[index];
		if (element.selectedIndex > 0)
			res = index;
	}
	if (res >= 0)
		return nodes[res][s[res].selectedIndex];
	else return {};
}
function showLastSpecified(end = s.length) {
	showNode(lastSpecifiedNode(end));
}
function makeFile(name, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', name);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
function generate() {
	result.textContent = JSON.stringify(tree, null, 1);
	makeFile('result.json', result.textContent);
	// mailLabel.href = "mailto:1853308@tongji.edu.cn?body=" + JSON.stringify(tree);
}