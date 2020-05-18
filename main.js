/*
	Pay attention to the data format:
		length = 3: name, time range begin, time range end
		length = 4: name, local cache path, source video path, source webpage path
		length = 6: name, local cache path, source video path, source webpage path, time range begin, time range end
*/
const videoSrcData = `
舞龙
	2019
		全国龙狮锦标赛男子规定, ./video/2019/全国舞龙舞狮锦标赛/规定/20191110wlgd.mp4, http://videoflv.sports.cn/201911/20191110wlgd.mp4, http://dragonlion.sport.org.cn/home/zhxw/2019-11-21/542357.html
			南京理工大学, 45, 570
				开场造型, 68, 124
				绕场跳龙五次, 126, 152
				正反腾跃前进, 156, 176
				快速游龙, 180, 190
				连续快腾进三次, 190, 210
				造型（尾盘，龙头戏珠）, 210, 230
				大横8字花（成型四次）, 230, 260
				左右螺旋跳龙接摇船, 260, 281
				大立圆螺旋行进, 282, 305
				起伏圆盘, 305, 321
				双杆, 321, 357
				造型（菱形）, 356, 363
				换位跳龙, 363, 377
				绕身舞龙, 377, 386
				站腿, 386, 397
				起伏圆盘接穿龙尾, 397, 406
				卧龙腾飞, 405, 414
				躺肩挂腰（直躺挂腰）, 413, 427
				造型（立龙）, 427, 448
				龙脱衣, 445, 455
				跳龙行进, 458, 476
				斜盘跳龙连续三次, 475, 490
				原地螺旋跳龙连续五次接直躺, 490, 509
				造型（龙腾九霄）, 509, 533
			湖南师范大学, 592, 1533
			湖北队, 1597, 2133
			台州学院, 2195, 2723
			上海三林, 2791, 3300
			集美大学, 3348, 3888
		全国龙狮锦标赛女子传统, ./video/2019/全国舞龙舞狮锦标赛/传统/20191109ctwl.mp4, http://videoflv.sports.cn/201911/20191109ctwl.mp4, http://dragonlion.sport.org.cn/home/zhxw/2019-11-21/542338.html, 0, 2502
			常州大学, 24, 542
			扬州工职院, 644, 1151
			江阴职院, 1335, 1841
			湖北队, 1929, 2463
		全国龙狮锦标赛男子传统, ./video/2019/全国舞龙舞狮锦标赛/传统/20191109ctwl.mp4, http://videoflv.sports.cn/201911/20191109ctwl.mp4, http://dragonlion.sport.org.cn/home/zhxw/2019-11-21/542338.html, 2502, 4250
			南理工紫金学院, 2499, 2870
			扬州工职院, 3026, 3512
			常州大学, 3626, 4155
	2018
		亚洲龙狮锦标赛
			台湾, ./video/2018/亚洲舞龙舞狮锦标赛/台湾队.mp4, https://vdept.bdstatic.com/444d344556374a725846455836434e45/4776724a7577736b/f4c86b25279a6eaa775b4d3a042aa451a2d6cc923c0450266f1f009b98283a128e8840db7382378714a5db1d4eeae572.mp4?auth_key=1589559633-0-0-ced45b37f19a492a2ee0c77633a4f81b, https://haokan.baidu.com/v?vid=1349428518790328525&pd=bjh&fr=bjhauthor&type=video, 0, 545
	2017
		全国运动会
			华东交通大学, ./video/2017/全国运动会群众比赛项目/华东交通大学.mp4, https://apd-67bf74619d6c7a48ac8124737de6c033.v.smtcdns.com/om.tc.qq.com/A1hb4tnPq1wr7VwaejiBKxaxfPq2TJeTVWew0mVBQxWs/uwMROfz2r5zBIaQXGdGnC2dfJ7xNfFa-OUQWNxqkLPBi52XA/h0394te13o9.p712.1.mp4?sdtfrom=v1010&amp;guid=a69a6db3fe1251fb13e1b0d4970313b2&amp;vkey=B1D2EC46A6FD127263D4A9E6EA7B36E14FE1FDD5892DAA92AA91AC41FF104BF976998379C3E95B4760528F98A98ABF6AA69BB48ED463D53ACC7D00A64EC8C0E8EF2DC3758C9F767640DA70BF67B04AFCFCAA3F93886C81227028A1B3D10EEDA408BF9A47898CD3E83ADC6F7A62AC393E82AC17F4FF33A110529C4C9CC9F87D17, https://v.qq.com/x/page/h0394te13o9.html, 0, 528
舞狮
`;
const difficultyA = `

`;
class Node {
    constructor(value) {
        this.value = value.split(',');
        this.sub = new Array(0);
        this.toString = function() {
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
        this.toString = function() {
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
const tree = makeAMultiTree(videoSrcData.substring(videoSrcData.indexOf('\n') + 1, videoSrcData.lastIndexOf('\n')));
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
                addOption(searchResults, value0ToString(node2, node1)), recordSearch.push(new Array(index1, index2, 0, 0, 0));
            for (const index3 in node2.sub) {
                const node3 = node2.sub[index3];
                if (node3.value[0].match(keyWord))
                    addOption(searchResults, value0ToString(node3, node2, node1)), recordSearch.push(new Array(index1, index2, index3, 0, 0));
                for (const index4 in node3.sub) {
                    const node4 = node3.sub[index4];
                    if (node4.value[0].match(keyWord))
                        addOption(searchResults, value0ToString(node4, node3, node2, node1)), recordSearch.push(new Array(index1, index2, index3, index4, 0));
                    for (const index5 in node4.sub) {
                        const node5 = node4.sub[index5];
                        if (node5.value[0].match(keyWord))
                            addOption(searchResults, value0ToString(node5, node4, node3, node2, node1)), recordSearch.push(new Array(index1, index2, index3, index4, index5));
                    }
                }
            }
        }
    }
}

function chooseSearch() {
    var indexesSet = recordSearch[searchResults.selectedIndex];
    s1.selectedIndex = indexesSet[0];
    updateSelectBox(1);
    s2.selectedIndex = indexesSet[1];
    updateSelectBox(2);
    s3.selectedIndex = indexesSet[2];
    updateSelectBox(3);
    s4.selectedIndex = indexesSet[3];
    updateSelectBox(4);
    s5.selectedIndex = indexesSet[4];
    updateSelectBox(5);
}