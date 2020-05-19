class Node {
    constructor(value) {
        this.value = value.split(',');
        this.sub = new Array(0);
        this.toString = function () {
            var str = new String(this.value);
            for (const child of this.sub) {
                str += child.toString();
            }
            return str;
        };
    }
}

function headTableCount(str) {
    var count = 0;
    for (const c of str)
        if (c === '\t')
            ++count;
        else break;
    return count;
}
class MultiTree {
    constructor(strings) {
        this.root = new Array();
        this.toString = function () {
            return this.root.toString();
        };
        var nodesStack = new Array(); //里面存的都是Node对象
        while (true) {
            var value = strings.shift();
            var depth = headTableCount(value);
            while (depth < nodesStack.length)
                nodesStack.pop();
            // push
            {
                if (depth > nodesStack.length)
                    console.log("Debug failed. Unexpected indent.");
                var tmp = new Node(value.replace(/[\t]+/g, ''));
                if (nodesStack.length > 0)
                    nodesStack[nodesStack.length - 1].sub.push(tmp);
                else
                    this.root.push(tmp);
                nodesStack.push(tmp);
            }
            if (strings.length === 0)
                break;
        }
    }
}

function makeAMultiTree(str) {
    strings = str.split('\n');
    var rev = new MultiTree(strings);
    if (strings.length > 0)
        console.log("Debug failed. Unexpected tree termination.");
    return rev;
}
const selectBoxMaxSize = 5;

function fillSelectBoxWithSubValues(selectBox, subArray) {
    selectBox.options.length = subArray.length;
    for (const i in subArray) {
        selectBox.options[i].text = subArray[i].value[0];
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
        rev = rev.concat(node.sub);
    return rev;
}
const all = "全选";

function nextNodesAndAll(nodes, selectedIndex) {
    return new Array(new Node(all)).concat(nextNodes(nodes, selectedIndex));
}
// Begin
var nodes1, nodes2, nodes3, nodes4, nodes5;
var recordSearch = new Array;
const tree = makeAMultiTree(videoSrcData);
var videoTimeBegin, videoTimeEnd;
updateSelectBox(0);
// End

function updateSelectBox(boxIndex) {
    switch (boxIndex) {
        case 0:
            nodes1 = new Array(new Node(all)).concat(tree.root); //运动项目
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

function loadFromSelected() {
    if (s4.selectedIndex !== 0 && loadVideoSrc(nodes4, s4.selectedIndex))
        ;
    else if (s3.selectedIndex !== 0 && loadVideoSrc(nodes3, s3.selectedIndex))
        ;
    else clearVideoSrc();

    if (s5.selectedIndex !== 0 && loadTimeRange(nodes5[s5.selectedIndex].value))
        ;
    else if (s4.selectedIndex !== 0 && loadTimeRange(nodes4[s4.selectedIndex].value))
        ;
    else {
        displayVideoTimeRange.innerText = "";
        return;
    }
    displayVideoTimeRange.innerText = secToTime(videoTimeBegin) + ', ' + secToTime(videoTimeEnd);
    updateVideo();
}

function loadTimeRange(value, begin, end) {
    if (value.length == 3) {
        videoTimeBegin = value[1];
        videoTimeEnd = value[2];
    } else if (value.length == 6) {
        videoTimeBegin = value[4];
        videoTimeEnd = value[5];
    } else return false;
    return true;
}

function refreshSelectBox() {
    s1.selectedIndex = s2.selectedIndex = s3.selectedIndex = s4.selectedIndex = s5.selectedIndex = 0;
}

function clearVideoSrc() {
    localVideoCache.src = "";
    originVideoURL.href = "";
    sourceVideo.src = "";
    originWebpage.href = "";
    video.load();
}

function loadVideoSrc(nodes, selectedIndex) {
    var node = nodes[selectedIndex];
    if (node.value.length == 6 || node.value.length == 4) {
        localVideoCache.src = nodes[selectedIndex].value[1];
        originVideoURL.href = nodes[selectedIndex].value[2];
        sourceVideo.src = nodes[selectedIndex].value[2];
        originWebpage.href = nodes[selectedIndex].value[3];
        video.load();
    } else return false;
    return true;
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
        rev.push(node.value[0].toString());
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
        if (node1.value[0].match(keyWord))
            addOption(searchResults, value0ToString(node1)), recordSearch.push(new Array(index1, 0, 0, 0, 0));
        for (const index2 in node1.sub) {
            const node2 = node1.sub[index2];
            if (node2.value[0].match(keyWord))
                addOption(searchResults, value0ToString(node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, 0, 0, 0));
            for (const index3 in node2.sub) {
                const node3 = node2.sub[index3];
                if (node3.value[0].match(keyWord))
                    addOption(searchResults, value0ToString(node3, node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, Number(index3) + 1, 0, 0));
                for (const index4 in node3.sub) {
                    const node4 = node3.sub[index4];
                    if (node4.value[0].match(keyWord))
                        addOption(searchResults, value0ToString(node4, node3, node2, node1)), recordSearch.push(new Array(index1, Number(index2) + 1, Number(index3) + 1, Number(index4) + 1, 0));
                    for (const index5 in node4.sub) {
                        const node5 = node4.sub[index5];
                        if (node5.value[0].match(keyWord))
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