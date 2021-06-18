/*
	require getvideoURL.js
*/
const storage = require("./localStorage");
import {
 getEmbededVideoSrc,
 fetchVideoSrcFromLocalStorage,
 fetchVideoSrcFromWeb,
 addVideoSrcToLocalStorage,
 removeVideoSrcFromLocalStorage,
} from "./getVideoURL";
export { nodes, tree, initTree, nextNodesAndAll, defaultNode };
var nodes = [[], [], [], [], []];
var tree = {};
const all = "全选";

function showStatus(status) {
 const ls = document.getElementById("loadStatus");
 if (!ls) console.error("Name an element to show the status of loading.");
 else
  switch (status) {
   case "Success":
    ls.value = "刷新";
    break;
   case "Failed":
    ls.value = "重试";
    break;
   case null:
    ls.value = "等待";
    break;
   default:
    ls.value = "错误";
    console.error('Unexpected status string "', status, '"');
    break;
  }
}
async function getTree() {
 storage.set("status", "Success");
 
 try {
  return await fetchVideoSrcFromLocalStorage();
 } catch (e) {
  console.log(e);
  console.error("Can't load from local storage.");
 }

 try {
  return await fetchVideoSrcFromWeb();
 } catch (e) {
  console.log(e);
  console.error("Local storage removed. Refresh to reload.");
  console.error("Can't load from web. Using embeded data.");
 }

 storage.set("status", "Failed");

 try {
  return await getEmbededVideoSrc();
 } catch (e) {
  console.log(error);
  alert("Failed to load video data properly by any means.");
 }

 throw "All failed.";
}
async function initTree(callback) {
 try {
  tree = await getTree();
  callback();
  addVideoSrcToLocalStorage(tree);
 } catch (error) {
  removeVideoSrcFromLocalStorage();
 }
 showStatus(storage.get("status"));
}

function defaultNode(value = all) {
 return { value: value, sub: [] };
}
//Return nodes
function selectedNodes(nodes, selectedIndex) {
 if (selectedIndex === 0) return nodes;
 else return new Array(nodes[selectedIndex]);
}

function nextNodes(nodes, selectedIndex) {
 var rev = new Array();
 for (const node of selectedNodes(nodes, selectedIndex))
  if (node.sub) rev = rev.concat(node.sub);
  else console.log("Node '", node.value, "' miss property 'sub'.");
 return rev;
}

function nextNodesAndAll(nodes, selectedIndex) {
 return new Array(defaultNode(all)).concat(nextNodes(nodes, selectedIndex));
}
