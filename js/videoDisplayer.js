if (process.env.NODE_ENV == "development") alert("videoDisplayer.js begin");
import { nodes } from "./infoTree"
import { s } from "./select"
export { loadFromSelected, switchDisplayMode }
var videoTimeBegin = 0, videoTimeEnd = NaN;
const emptyURL = "javascript:void(0)";
const emptyPage = "about:blank";
const emptySrc = "";
var displayMode = "html5";
var displayNode = { src: emptySrc, from: "", origin: emptyPage };

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
function clearVideoSrc() {
	videoTimeBegin = 0;
	videoTimeEnd = NaN;
	originVideoURL.href = emptyURL;
	sourceVideo.src = emptySrc;
	originWebpage.href = emptyPage;
	embededFrame.src = emptyPage;
	video.load();
}
function getAddtionalInfo(node) {
	if (node && node.comment) {
		var res = [];
		for (const value of node.comment) {
			res.push(String(value.name + ": " + value.content));
		}
		return res;
	}
	else return [];
}
function secToTime(seconds) {
	return Math.floor(seconds / 3600) + ':' + Math.floor(seconds % 3600 / 60) + ':' + seconds % 60;
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

	// Display comments on this node.
	for (let index = 0; index < nodes.length; index++) {
		const info = document.getElementById("i" + String(index));
		const node = nodes[index];
		const selected = s[index].selectedIndex;
		if (selected !== 0 && node[selected]) {
			while (info.childNodes.length > 0)
				info.removeChild(info.childNodes[0]);
			{
				var p = document.createElement("p");
				p.className = "info";
				p.textContent = node[selected].value + ": ";
				info.appendChild(p);
			}
			const arr = getAddtionalInfo(node[selected]);
			arr.forEach(value => {
				var p = document.createElement("p");
				p.className = "sub";
				p.textContent = value;
				info.appendChild(p);
			})
		}
		info.hidden = info.childNodes.length <= 1;
	}
	displayVideoTimeRange.innerText = secToTime(videoTimeBegin) + ', ' + secToTime(videoTimeEnd);
}
if (process.env.NODE_ENV == "development") alert("videoDisplayer.js end");