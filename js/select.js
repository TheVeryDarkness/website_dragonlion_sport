/*
	require infoTree.js
*/
var s = [
	document.getElementById("s0"),
	document.getElementById("s1"),
	document.getElementById("s2"),
	document.getElementById("s3"),
	document.getElementById("s4")
];
var callbackOnUpdate = () => { console.log("Not specified."); };

function initSelect(callback) {
	initTree(() => { updateSelectBox(-1); });
	if (!callback)
		console.error("Callback not available.");
	else callbackOnUpdate = callback;
}

function fillSelectBoxWithSubValues(selectBox, subArray) {
	selectBox.options.length = subArray.length;
	for (const i in subArray) {
		selectBox.options[i].text = subArray[i].value;
	}
}

function fillSelectBoxWithNodes(selectBox, nodes) {
	fillSelectBoxWithSubValues(selectBox, nodes);
}

// Just update select boxes' contents
// boxIndex is the index of the box whose selected index is changed
function updateSelectBox(boxIndex) {
	if (boxIndex > 0 && s[boxIndex - 1].selectedIndex == 0)
		trackBack(boxIndex);
	switch (boxIndex) {
		case -1:
			nodes[0] = new Array(defaultNode(all)).concat(tree.root); //运动项目
			fillSelectBoxWithNodes(s[0], nodes[0]);
		case 0:
			nodes[1] = nextNodesAndAll(nodes[0], s0.selectedIndex); //年份
			fillSelectBoxWithNodes(s[1], nodes[1]);
		case 1:
			nodes[2] = nextNodesAndAll(nodes[1], s[1].selectedIndex); //赛事
			fillSelectBoxWithNodes(s[2], nodes[2]);
		case 2:
			nodes[3] = nextNodesAndAll(nodes[2], s[2].selectedIndex); //队伍
			fillSelectBoxWithNodes(s[3], nodes[3]);
		case 3:
			nodes[4] = nextNodesAndAll(nodes[3], s[3].selectedIndex); //动作
			fillSelectBoxWithNodes(s[4], nodes[4]);
		case 4:
			callbackOnUpdate();
			break;
		default:
			console.error("Unexpected index ", boxIndex);
	}
}


function refreshSelectBox() {
	s[0].selectedIndex = s[1].selectedIndex = s[2].selectedIndex = s[3].selectedIndex = s[4].selectedIndex = 0;
}

function track(selectBoxSup, selectBoxSub, nodesSup) {
	var lenSub = 1,
		indexSup = 0;
	for (const s of nodesSup) {
		lenSub += s.sub.length;
		if (lenSub > selectBoxSub.selectedIndex)
			break;
		++indexSup;
	}
	selectBoxSup.selectedIndex = indexSup;
}
function trackBack(boxIndex) {
	switch (boxIndex) {
		case 4:
			track(s[3], s[4], nodes[3]);
		case 3:
			track(s[2], s[3], nodes[2]);
		case 2:
			track(s[1], s[2], nodes[1]);
		case 1:
			track(s[0], s[1], nodes[0]);
		case 0:
		default:
	}
}