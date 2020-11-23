import { nodes, tree } from "./infoTree"
import { s } from "./select"
export { showLastSpecified, generate };

// Current specified node to be modifyied
var specified = {};
// resultTreeJSON is a node
function showJSON() {
	console.log(JSON.stringify(tree));
	resultTreeJSON.textContent = JSON.stringify(tree, null, 1);
}
function renderPropertyToDocumentNode(key, element, node) {
	switch (key) {
		case "sub":
			var arr = [];
			for (const iterator of element) {
				arr.push(iterator.value);
			}
			return document.createTextNode(arr);
		case 'range':
			var form = document.createElement("form");
			// Standarize to array
			if (!element instanceof Array) {
				node[key] = [0, 0];
				console.error("Node '", node.value, "' should has a array range.");
				console.error("But it is ", typeof (element), "'", JSON.stringify(element), "'.");
				console.error(element);
			}
			else if (element.length == 2)
				;
			else {
				console.error("Node '", node.value, "' should has a range with a length 2.");
				console.error("But it has a value '", JSON.stringify(element), "'.")
				if (element.length > 2)
					node[key] = element.slice(0, 2);
				else if (element.length == 1)
					node[key] = [element[0], element[0]];
				else
					node[key] = [0, 0];
			}
			element = node[key];

			var input0 = document.createElement("input");// begin
			input0.value = element[0];
			input0.onchange = (event) => {
				specified[key][0] = event.target.value;
				showJSON();
			};
			var input1 = document.createElement("input");// end
			input1.value = element[1];
			input1.onchange = (event) => {
				specified[key][1] = event.target.value;
				showJSON();
			};
			form.appendChild(input0);
			form.appendChild(input1);

			return form;

		default:
			if (typeof (element) != 'string')
				console.error("It's recommended to provide another tool for non-string preperty '", key, "'.");
			var input = document.createElement("input");
			input.value = element;
			input.onchange = (event) => {
				specified[key] = event.target.value;
				showJSON();
			};
			return input;
	}
}
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
			const p = document.createElement("p");
			p.className = "sub";
			const label = document.createElement("label");
			label.innerText = key;
			label.for = "display-li-" + index;

			var box = renderPropertyToDocumentNode(key, element, node);
			if (!box) {
				console.error("Illegal value.");
				continue;
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
	if (resultTreeJSON.textContent !== JSON.stringify(tree, null, 1))
		console.error("Data in textarea is modified somewhere.");
	showJSON();
	makeFile('result.json', resultTreeJSON.textContent);
}