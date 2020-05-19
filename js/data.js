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
`.trim();

var tableActionLevel;
{
    const actionLevelData = `
原地8字舞龙，行进8字舞龙，单跪舞龙，套头舞龙，搁脚舞龙，扯旗舞龙，靠背舞龙，横移(跳)步舞龙，起伏8字舞龙；
直线行进，曲线行进，走(跑)圆场，滑步行进，起伏行进，单侧起伏小圆场，矮步跑圆场，直线(曲线、圆场)行进越障碍；
穿龙尾，越龙尾，首尾穿(越)肚；
龙翻身；
龙门造型，塔盘造型，尾盘造型，曲线造型，龙出宫造型，蝴蝶盘花造型，组字造型，龙舟造型，螺丝结顶造型，卧(垛)龙造型。
原地快速8字舞龙，行进快速8字舞龙，跪步行进快舞龙，抱腰舞龙，绕身舞龙，双人换位舞龙，快舞龙磨转，连续抛接龙头横移(跑)步舞龙；
快速曲线起伏行进，快速顺逆连续跑圆场，快速矮步跑圆场越障碍，快速跑斜圆场，骑肩双杆起伏行进；
龙穿身，龙脱衣，龙戏尾，连续腾越行进，腾身穿尾，穿尾越龙身，卧龙飞腾，穿八五节，首(尾)穿花缠身行进；
快速逆(顺)向跳龙行进(2次以上)，连续游龙跳龙(2次以上)，大立圆螺旋行进(3次以上)；
上肩高塔造型自转一周，龙尾高翘寻珠、追珠，首尾盘柱，龙翻身接滚翻成造型，单臂侧手翻接滚翻成造型。
跳龙接一蹲一躺快舞龙，跳龙接摇船快舞龙，跳龙接直躺快舞龙，依次滚翻接单跪快舞龙，挂腰舞龙(两人一组)，K式舞龙(3人一组)，站腿舞龙(两人一组)，双杆舞龙(一人持两杆)；
站肩平盘起伏(二周以上)，直线后倒、鲤鱼打挺接擎龙行进；
快速连续穿越行进(3次以上)，连续穿越腾越行进(4次以上)；
快速连续斜盘跳龙(3次以上)，快速连续螺旋跳龙(4次以上)，快速连续螺旋跳龙磨转(6次以上)，快速左右螺旋跳龙(左右各3次以上)，快速连续磨盘跳龙(3次以上)；
大横8字花慢行进(成型4次以上)，坐肩后仰成平盘起伏旋转(一周以上)。
`.replace(/[ \t\n]+/g, '').split('。');
    const numLevels = 3;
    const numCategory = 5;
    while (actionLevelData[actionLevelData.length - 1] == "")
        actionLevelData.pop();
    if (actionLevelData.length != numLevels)
        console.log("Debug failed! There should be " + numLevels + " levels.");

    tableActionLevel = new Array();
    for (const level of actionLevelData) {
        var tmp = new Array();
        for (const category of level.split('；')) {
            tmp[tmp.length] = category.split('，');
        }
        while (tmp[tmp.length - 1] == "")
            tmp.pop();
        if (tmp.length != numCategory)
            console.log("Debug failed! There should be " + numCategory + " categories.");
        tableActionLevel[tableActionLevel.length] = tmp;
    }
}
const tableAction = tableActionLevel;