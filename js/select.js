/*
	require tree.js
*/
const emptyURL = "javascript:void(0)";
const emptyPage = "about:blank";
const emptySrc = "";
var displayMode = "html5";
var displayNode = { src: emptySrc, from: "", origin: emptyPage }

function fillSelectBoxWithSubValues(selectBox, subArray) {
	selectBox.options.length = subArray.length;
	for (const i in subArray) {
		selectBox.options[i].text = subArray[i].value;
	}
}

function fillSelectBoxWithNodes(selectBox, nodes) {
	fillSelectBoxWithSubValues(selectBox, nodes);
}
// boxIndex is the index of the box whose selected index is changed
function updateSelectBox(boxIndex) {
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
			trackBack(boxIndex);
		default:
			loadFromSelected();
	}
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
	s[0].selectedIndex = s[1].selectedIndex = s[2].selectedIndex = s[3].selectedIndex = s[4].selectedIndex = 0;
}

function clearVideoSrc() {
	videoTimeBegin = 0;
	videoTimeEnd = NaN;
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
function addOption(selectBox, text) {
	selectBox.options.length = selectBox.options.length + 1;
	selectBox.options[selectBox.options.length - 1].text = text;
}
// Contains video source, video range and addtional information
function loadFromSelected() {
	clearVideoSrc();
	if (s[4].selectedIndex !== 0 && loadTimeRange(nodes[4][s[4].selectedIndex]))
		;
	else if (s[3].selectedIndex !== 0 && loadTimeRange(nodes[3][s[3].selectedIndex]))
		;
	else if (s[2].selectedIndex !== 0 && loadTimeRange(nodes[2][s[2].selectedIndex]))
		;
	else displayVideoTimeRange.innerText = "";

	if (s[4].selectedIndex !== 0 && loadVideoSrc(nodes[4][s[4].selectedIndex]))
		;
	else if (s[3].selectedIndex !== 0 && loadVideoSrc(nodes[3][s[3].selectedIndex]))
		;
	else if (s[2].selectedIndex !== 0 && loadVideoSrc(nodes[2][s[2].selectedIndex]))
		;
	else clearVideoSrc();

	for (let index = 0; index < nodes.length; index++) {
		const info = document.getElementById("i" + String(index));
		const node = nodes[index];
		const selected = s[index].selectedIndex;
		if (selected !== 0 && node[selected]) {
			info.innerText = node[selected].value + ": " + getAddtionalInfo(node[selected]);
		}
		info.hidden = !info.innerText;
	}
	displayVideoTimeRange.innerText = secToTime(videoTimeBegin) + ', ' + secToTime(videoTimeEnd);
}