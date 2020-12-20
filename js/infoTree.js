/*
	require getvideoURL.js
*/
if (process.env.NODE_ENV == "development") alert("infoTree.js begin");
const storage = require("./localStorage");
import {
 getEmbededVideoSrc,
 fetchVideoSrcFromLocalStorage,
 fetchVideoSrcFromGitHub,
 fetchVideoSrcFromGitee,
 addVideoSrcToLocalStorage,
 removeVideoSrcFromLocalStorage,
} from "./getVideoURL";
export { nodes, tree, initTree, nextNodesAndAll, defaultNode };
var nodes = [[], [], [], [], []];
var tree = {};
const all = "全选";

function showStatus(res) {
 const ls = document.getElementById("loadStatus");
 if (!ls) console.error("Name an element to show the status of loading.");
 else
  switch (res) {
   case "Success":
    ls.value = "刷新";
    break;
   case "Failed":
    ls.value = "重试";
    break;
   default:
    ls.value = "错误";
    console.error("Unexpected status string.");
    break;
  }
}

function initTree(callback) {
 // Some browsers do not support 'any' yet
 return fetchVideoSrcFromLocalStorage()
  .catch((e) => {
   storage.set("status", "Failed");
   console.error(e);
   console.log("Can't load from local storage.");
   const res = fetchVideoSrcFromGitHub();
   storage.set("status", "Success");
   return res;
  })
  .catch((e) => {
   console.error(e);
   console.log("Can't load from github.");
   const res = fetchVideoSrcFromGitee();
   storage.set("status", "Success");
   return res;
  })
  .catch((e) => {
   console.error(e);
   console.log("Can't load from gitee.");
   throw e;
  })
  .then((res) => {
   tree = res;
   callback();
   showStatus(storage.get("status"));
   addVideoSrcToLocalStorage(tree);
   console.log("Video data stored.");
  })
  .catch((e) => {
   console.error(e);
   removeVideoSrcFromLocalStorage();
   console.log("Local storage removed. Refresh to reload.");
   alert("Can't load from web. Using embeded data.");
   getEmbededVideoSrc()
    .then((res) => {
     tree = res;
     callback();
     showStatus("Success");
    })
    .catch((error) => {
     console.error(error);
     showStatus("Failed");
     alert("Failed to load video data properly by any means.");
    });
  });
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
if (process.env.NODE_ENV == "development") alert("infoTree.js end");
