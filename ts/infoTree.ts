/*
	require getvideoURL.js
*/
declare const ls: HTMLInputElement;
import storage = require("./localStorage");
import {
 getEmbededVideoSrc,
 fetchVideoSrcFromLocalStorage,
 fetchVideoSrcFromWeb,
 addVideoSrcToLocalStorage,
 removeVideoSrcFromLocalStorage,
} from "./getVideoURL";
export { nodes, tree, initTree, nextNodesAndAll, defaultNode };
// To be filled
export const keyToBeFilled = "somewhat";
export const nameToBeFilled = "unnamed";
export interface dataNode {
 value: string;
 sub: dataNode[];

 src?: string;
 origin?: string;
 range?: [string, string];
 frame?: string;
 from?: string;
 height?: number;
 width?: number;
 comment?: { name: string; content: string }[];
 somewhat?: string;
}
export interface dataTree {
 root: dataNode;
}
var nodes: [dataNode[], dataNode[], dataNode[], dataNode[], dataNode[]] = [
 [],
 [],
 [],
 [],
 [],
];
var tree: dataTree;
const all = "全选";

function showStatus(status: string) {
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
  console.log(e);
  alert("Failed to load video data properly by any means.");
 }

 throw "All failed.";
}
async function initTree(callback: () => void) {
 try {
  tree = await getTree();
  callback();
  addVideoSrcToLocalStorage(tree);
 } catch (error) {
  removeVideoSrcFromLocalStorage();
 }
 const status = storage.get("status");
 showStatus(status ? status : "");
}

function defaultNode(value = all): dataNode {
 return { value: value, sub: [] };
}
//Return nodes
function selectedNodes(nodes: dataNode[], selectedIndex: number) {
 if (selectedIndex === 0) return nodes;
 else return new Array(nodes[selectedIndex]);
}

function nextNodes(nodes: dataNode[], selectedIndex: number) {
 var rev = new Array();
 for (const node of selectedNodes(nodes, selectedIndex))
  if (node.sub) rev = rev.concat(node.sub);
  else console.log("Node '", node.value, "' miss property 'sub'.");
 return rev;
}

function nextNodesAndAll(nodes: dataNode[], selectedIndex: number) {
 return new Array(defaultNode(all)).concat(nextNodes(nodes, selectedIndex));
}
