/*
	require getvideoURL.js
*/
var nodes = [[], [], [], [], []];
var tree = {};
async function initTree(callback) {
	var fetcher = new videoSourceFetcher();
	var race = Promise.any([
		fetcher.fetchVideoSrcFromLocalStorage(),
		fetcher.fetchVideoSrcFromSameSite(),
		fetcher.fetchVideoSrcFromGitHub()
	]);
	race
		.then(res => {
			tree = res;
			callback();
			console.log("Storing video data.");
			fetcher.addVideoSrcToLocalStorage(tree);
		})
		.catch(e => {
			console.error(e);
			fetcher.removeVideoSrcFromLocalStorage();
			console.log("Local storage removed. Refresh to reload.")
			alert("Failed to load video data by any means.");
		});
}
var videoTimeBegin = 0, videoTimeEnd = NaN;

function defaultNode(value) {
	return { "value": value, sub: [] };
}
//Return nodes
function selectedNodes(nodes, selectedIndex) {
	if (selectedIndex === 0)
		return nodes;
	else return new Array(nodes[selectedIndex]);
}

function nextNodes(nodes, selectedIndex) {
	var rev = new Array();
	for (const node of selectedNodes(nodes, selectedIndex))
		if (node.sub)
			rev = rev.concat(node.sub);
		else console.log("Node '", node.value, "' miss property 'sub'.");
	return rev;
}
const all = "全选";

function nextNodesAndAll(nodes, selectedIndex) {
	return new Array(defaultNode(all)).concat(nextNodes(nodes, selectedIndex));
}

function getAddtionalInfo(node) {
	return node && node.comment ? node.comment[0].content : "";
}

function secToTime(seconds) {
	return Math.floor(seconds / 3600) + ':' + Math.floor(seconds % 3600 / 60) + ':' + seconds % 60;
}

function value0ToString() {
	var rev = new Array();
	for (const node of arguments) {
		rev.push(node.value.toString());
	}
	return rev;
}