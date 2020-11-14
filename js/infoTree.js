/*
	require getvideoURL.js
*/
var nodes = [[], [], [], [], []];
var tree = {};
const all = "全选";

function showStatus(res) {
	const ls = document.getElementById("loadStatus");
	if (!ls)
		console.error("Name an element to show the status of loading.");
	else if (res)
		ls.value = "刷新";
	else
		ls.value = "重试";
}

function initTree(callback) {
	const fetcher = new videoSourceFetcher();
	// WeiXin browser does not support any yet
	var race = (Promise.any ?
		Promise.any([
			fetcher.fetchVideoSrcFromLocalStorage(),
			fetcher.fetchVideoSrcFromSameSite(),
			fetcher.fetchVideoSrcFromGitHub()
		]) : fetcher.fetchVideoSrcFromLocalStorage()
			.catch(e => {
				console.log(e);
				return fetcher.fetchVideoSrcFromSameSite();
			}).catch(e => {
				console.log(e);
				return fetcher.fetchVideoSrcFromGitHub();
			}).catch(e => {
				console.log(e);
				alert("Can't load by any mean.")
			}));
	race
		.then(res => {
			tree = res;
			callback();
			showStatus(true);
			fetcher.addVideoSrcToLocalStorage(tree);
			console.log("Video data stored.");
		})
		.catch(e => {
			console.error(e);
			showStatus(false);
			fetcher.removeVideoSrcFromLocalStorage();
			console.log("Local storage removed. Refresh to reload.")
			alert("Failed to load video data properly by any means.");
		});
}

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

function nextNodesAndAll(nodes, selectedIndex) {
	return new Array(defaultNode(all)).concat(nextNodes(nodes, selectedIndex));
}