/* 
	require tree.js
	require select.js
	require getActionTable
*/
var recordSearch = new Array;
var s = [
	document.getElementById("s0"),
	document.getElementById("s1"),
	document.getElementById("s2"),
	document.getElementById("s3"),
	document.getElementById("s4")
];

function searchInAllNodes(keyWord) {
	if (keyWord == null) return;
	searchResults.options.length = 0;
	recordSearch.length = 0;
	//index below is 
	for (const index1 in nodes[0]) {
		if (index1 == 0) continue;
		const node1 = nodes[0][index1];
		if (node1.value.match(keyWord))
			addOption(searchResults, value0ToString(node1)), recordSearch.push(new Array(index1, 0, 0, 0, 0));
		for (const index2 in node1.sub) {
			const node2 = node1.sub[index2];
			if (node2.value.match(keyWord))
				addOption(searchResults, value0ToString(node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, 0, 0, 0));
			for (const index3 in node2.sub) {
				const node3 = node2.sub[index3];
				if (node3.value.match(keyWord))
					addOption(searchResults, value0ToString(node3, node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, Number(index3) + 1, 0, 0));
				for (const index4 in node3.sub) {
					const node4 = node3.sub[index4];
					if (node4.value.match(keyWord))
						addOption(searchResults, value0ToString(node4, node3, node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, Number(index3) + 1, Number(index4) + 1, 0));
					for (const index5 in node4.sub) {
						const node5 = node4.sub[index5];
						if (node5.value.match(keyWord))
							addOption(searchResults, value0ToString(node5, node4, node3, node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, Number(index3) + 1, Number(index4) + 1, Number(index5) + 1));
					}
				}
			}
		}
	}
}
function chooseSearch() {
	var indexesSet = recordSearch[searchResults.selectedIndex];
	s0.selectedIndex = indexesSet[0];

	nodes[1] = nextNodesAndAll(nodes[0], indexesSet[0]);
	fillSelectBoxWithNodes(s[1], nodes[1]);
	s[1].selectedIndex = indexesSet[1];

	nodes[2] = nextNodesAndAll(nodes[1], indexesSet[1]);
	fillSelectBoxWithNodes(s[2], nodes[2]);
	s[2].selectedIndex = indexesSet[2];

	nodes[3] = nextNodesAndAll(nodes[2], indexesSet[2]);
	fillSelectBoxWithNodes(s[3], nodes[3]);
	s[3].selectedIndex = indexesSet[3];

	nodes[4] = nextNodesAndAll(nodes[3], indexesSet[3]);
	fillSelectBoxWithNodes(s[4], nodes[4]);
	s[4].selectedIndex = indexesSet[4];

	loadFromSelected();
}
function showActions() {
	if (a1.selectedIndex !== -1 && a2.selectedIndex !== -1) {
		a3.options.length = 0;
		for (const s of tableActionLevel[a1.selectedIndex][a2.selectedIndex]) {
			addOption(a3, s);
		}
	}
}
function goSearch(text) {
	textSearchInAll.value = text;
	searchInAllNodes(text);
}