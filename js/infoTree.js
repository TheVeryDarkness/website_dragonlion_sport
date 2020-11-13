/*
	require getvideoURL.js
*/
var nodes = [[], [], [], [], []];
var tree = {};
const all = "全选";

async function initTree(callback) {
	var fetcher = new videoSourceFetcher();
	// WeiXin browser does not support any yet
	var race =
		Promise.any ?
			Promise.any([
				fetcher.fetchVideoSrcFromLocalStorage(),
				fetcher.fetchVideoSrcFromSameSite(),
				fetcher.fetchVideoSrcFromGitHub()
			])
			:
			fetcher.fetchVideoSrcFromLocalStorage()
				.catch(e => {
					console.log(e);
					return fetcher.fetchVideoSrcFromSameSite();
				}).catch(e => {
					console.log(e);
					return fetcher.fetchVideoSrcFromGitHub();
				}).catch(e => {
					console.log(e);
					alert("Can't load by any mean.")
				});
	race
		.then(res => {
			tree = res;
			callback(true);
			fetcher.addVideoSrcToLocalStorage(tree);
			console.log("Video data stored.");
		})
		.catch(e => {
			console.error(e);
			callback(false);
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