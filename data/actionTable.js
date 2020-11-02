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