function defaultNode(value) {
	return { "value": value, sub: [] };
}
var dbg_data = { sport: [], time: [], event: [], team: [], action: [] }
var dbg_array = []
const selectBoxMaxSize = 5;

function fillSelectBoxWithSubValues(selectBox, subArray) {
	selectBox.options.length = subArray.length;
	for (const i in subArray) {
		selectBox.options[i].text = subArray[i].value;
	}
}

function fillSelectBoxWithNodes(selectBox, nodes) {
	fillSelectBoxWithSubValues(selectBox, nodes);
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
// Begin
var nodes1, nodes2, nodes3, nodes4, nodes5;
var recordSearch = new Array;
var tree = {};
fetchVideoSrc().then(res => {
	tree = res;
	updateSelectBox(0);
}).catch(e => { console.error(e); throw e; });
var videoTimeBegin = 0, videoTimeEnd = Infinity;
// End

function updateSelectBox(boxIndex) {
	switch (boxIndex) {
		case 0:
			nodes1 = new Array(defaultNode(all)).concat(tree.root); //运动项目
			fillSelectBoxWithNodes(s1, nodes1);
		case 1:
			nodes2 = nextNodesAndAll(nodes1, s1.selectedIndex); //年份
			fillSelectBoxWithNodes(s2, nodes2);
		case 2:
			nodes3 = nextNodesAndAll(nodes2, s2.selectedIndex); //赛事
			fillSelectBoxWithNodes(s3, nodes3);
		case 3:
			nodes4 = nextNodesAndAll(nodes3, s3.selectedIndex); //队伍
			fillSelectBoxWithNodes(s4, nodes4);
		case 4:
			nodes5 = nextNodesAndAll(nodes4, s4.selectedIndex); //动作
			fillSelectBoxWithNodes(s5, nodes5);
		case 5:
			trackBack(boxIndex);
		default:
			loadFromSelected();
	}
}

function getAddtionalInfo(node) {
	return node && node.comment ? node.comment : "";
}

// Contains video source, video range and addtional information
function loadFromSelected() {
	if (s5.selectedIndex !== 0 && loadTimeRange(nodes5[s5.selectedIndex]))
		;
	else if (s4.selectedIndex !== 0 && loadTimeRange(nodes4[s4.selectedIndex]))
		;
	else if (s3.selectedIndex !== 0 && loadTimeRange(nodes3[s3.selectedIndex]))
		;
	else displayVideoTimeRange.innerText = "";

	clearVideoSrc();
	if (s5.selectedIndex !== 0 && loadVideoSrc(nodes5[s5.selectedIndex]))
		;
	else if (s4.selectedIndex !== 0 && loadVideoSrc(nodes4[s4.selectedIndex]))
		;
	else if (s3.selectedIndex !== 0 && loadVideoSrc(nodes3[s3.selectedIndex]))
		;
	else clearVideoSrc();
	additionalInfo.innerText = "";
	additionalInfo.innerText += getAddtionalInfo(nodes1[s1.selectedIndex]);
	additionalInfo.innerText += getAddtionalInfo(nodes2[s2.selectedIndex]);
	additionalInfo.innerText += getAddtionalInfo(nodes3[s3.selectedIndex]);
	additionalInfo.innerText += getAddtionalInfo(nodes4[s4.selectedIndex]);
	additionalInfo.innerText += getAddtionalInfo(nodes5[s5.selectedIndex]);
	displayVideoTimeRange.innerText = secToTime(videoTimeBegin) + ', ' + secToTime(videoTimeEnd);
}

function loadTimeRange(node) {
	if (node.range) {
		if (node.range[0] && node.range[1]) {
			const begin = node.range[0];
			const end = node.range[1];
			videoTimeBegin = begin;
			videoTimeEnd = end;
			return true;
		}
		console.log("Node \'", node.value, "\' has a illegal value for property 'range'");
	}
	return false;
}

function refreshSelectBox() {
	s1.selectedIndex = s2.selectedIndex = s3.selectedIndex = s4.selectedIndex = s5.selectedIndex = 0;
}

const emptyURL = "javascript:void(0)";
const emptyPage = "about:blank";
const emptySrc = "";
function clearVideoSrc() {
	videoTimeBegin = 0;
	videoTimeEnd = Infinity;
	originVideoURL.href = emptyURL;
	sourceVideo.src = emptySrc;
	originWebpage.href = emptyPage;
	embededFrame.src = emptyPage;
	video.load();
}

// video|iframe
function switchActiveLabel(mode) {
	if (mode == "video") {
		video.style.display = "block";
		embededFrame.style.display = "none";
	}
	else if (mode == "iframe") {
		video.style.display = "none";
		embededFrame.style.display = "block";
	}
	else console.error("Unrecognized mode '", mode, "'.")
}


var displayMode = "html5";
var displayNode = { src: emptySrc, from: "", origin: emptyPage }

// html5|player|page
function displayAs(node, mode) {
	displayMode = mode;
	displayNode = node;

	if (mode == "html5") {
		sourceVideo.src = node.src;
		switchActiveLabel("video");
		video.load();
		updateVideo();
	} else if (mode == "player") {
		if (node.from == "bilibili")
			//See http://docs.bilibili.cn/wiki
			//Reference:
			//	https://blog.csdn.net/xinshou_caizhu/article/details/94028606
			//	https://www.bilibili.com/read/cv5293665/
			embededFrame.src = node.frame + "&high_quality=1&t=" + videoTimeBegin;
		else if (node.from == "vqq")
			//See https://m.v.qq.com/txp/v3/src/iframeapi/new.html
			embededFrame.src = node.frame + "&show1080p=1&starttime=" + videoTimeBegin;
		else if (node.from == "youku")
			//See http://open.iqiyi.com/lib/play.html,
			//	or http://static-d.iqiyi.com/ext/openapi/iQiyi_Gragonfly_coop_20190304.pdf
			//Reference:
			//	https://open.iqiyi.com/help/qa/play.html
			//	https://cloud.tencent.com/developer/article/1494396
			embededFrame.src = node.frame + "?starttime=" + videoTimeBegin + "&endtime=" + videoTimeEnd;
		else {
			embededFrame.src = node.frame;
			console.log("Unrecognized video source: '", node.from, "'")
		}
		switchActiveLabel("iframe");
	} else if (mode == "page") {
		embededFrame.src = node.origin;
		switchActiveLabel("iframe");
	} else console.error("Unrecognized mode '", mode, "'.")
}

// Return true if source is specified
function loadVideoSrc(node) {
	originVideoURL.href = node.src ? node.src : emptyURL;
	originWebpage.href = node.origin ? node.origin : emptyPage;

	if (node.src) {
		displayAs(node, "html5");
	} else if (node.frame) {
		displayAs(node, "player");
	} else if (node.origin) {
		displayAs(node, "page");
	} else return false;
	return true;
}

function switchDisplayMode() {
	const displayModes = ["html5", "player", "page"]
	const node = displayNode;
	const index = displayModes.indexOf(displayMode);

	displayAs(node, displayModes[(index + 1) % displayModes.length])
}

function updateVideo() {
	video.currentTime = videoTimeBegin;
	video.addEventListener('timeupdate', checkTimeRange);
}

function checkTimeRange() {
	if (video.currentTime >= videoTimeEnd) {
		video.pause();
		video.removeEventListener('timeupdate', checkTimeRange);
	}
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
		case 5:
			track(s4, s5, nodes4);
		case 4:
			track(s3, s4, nodes3);
		case 3:
			track(s2, s3, nodes2);
		case 2:
			track(s1, s2, nodes1);
		case 1:
		default:
	}
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

function addOption(selectBox, text) {
	selectBox.options.length = selectBox.options.length + 1;
	selectBox.options[selectBox.options.length - 1].text = text;
}

function searchInAllNodes(keyWord) {
	if (keyWord == null) return;
	searchResults.options.length = 0;
	recordSearch.length = 0;
	//index below is 
	for (const index1 in nodes1) {
		if (index1 == 0) continue;
		const node1 = nodes1[index1];
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
	s1.selectedIndex = indexesSet[0];

	nodes2 = nextNodesAndAll(nodes1, indexesSet[0]);
	fillSelectBoxWithNodes(s2, nodes2);
	s2.selectedIndex = indexesSet[1];

	nodes3 = nextNodesAndAll(nodes2, indexesSet[1]);
	fillSelectBoxWithNodes(s3, nodes3);
	s3.selectedIndex = indexesSet[2];

	nodes4 = nextNodesAndAll(nodes3, indexesSet[2]);
	fillSelectBoxWithNodes(s4, nodes4);
	s4.selectedIndex = indexesSet[3];

	nodes5 = nextNodesAndAll(nodes4, indexesSet[3]);
	fillSelectBoxWithNodes(s5, nodes5);
	s5.selectedIndex = indexesSet[4];

	loadFromSelected();
}
showActions();
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