/*
	require getvideoURL.js
*/
import { embededVideoSrc, fetchVideoSrcFromLocalStorage, fetchVideoSrcFromSameSite, fetchVideoSrcFromGitHub, addVideoSrcToLocalStorage, removeVideoSrcFromLocalStorage } from "./getVideoURL"
export { nodes, tree, initTree, nextNodesAndAll, defaultNode };
var nodes = [[], [], [], [], []];
var tree = {};
const all = "全选";

function showStatus(res) {
	const ls = document.getElementById("loadStatus");
	if (!ls)
		console.error("Name an element to show the status of loading.");
	else if (res)
		ls.value = "重置";
	else
		ls.value = "重试";
}

function initTree(callback) {
	// Some browsers do not support 'any' yet
	var race = (Promise.any ?
		Promise.any([
			fetchVideoSrcFromLocalStorage(),
			fetchVideoSrcFromSameSite(),
			fetchVideoSrcFromGitHub()
		]) : fetchVideoSrcFromLocalStorage()
			.catch(e => {
				console.log(e);
				return fetchVideoSrcFromSameSite();
			}).catch(e => {
				console.log(e);
				return fetchVideoSrcFromGitHub();
			}).catch(e => {
				console.log(e);
				alert("Can't load by any mean.");
				throw "Load failure.";
			}));
	race
		.then(res => {
			tree = res;
			callback();
			showStatus(true);
			addVideoSrcToLocalStorage(tree);
			console.log("Video data stored.");
		})
		.catch(e => {
			console.log(e);
			removeVideoSrcFromLocalStorage();
			console.error("Can't fecth from outside.");
			console.log("Local storage removed. Refresh to reload.");
			alert("Using embeded data.");
			embededVideoSrc()
				.then(res => {
					tree = res;
					callback();
					showStatus(true);
				})
				.catch(error => {
					console.log(error);
					showStatus(false);
					alert("Failed to load video data properly by any means.");
				});
		});
}

function defaultNode(value = all) {
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