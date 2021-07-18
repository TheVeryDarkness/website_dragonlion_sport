# 同济大学龙狮协会训练资料网站

供同济大学龙狮协会学习交流使用。出于多方面的考虑，没有购买服务器，但您可以尝试通过[GitHub Pages](https://theverydarkness.github.io/website_dragonlion_sport/)或[Gitee Pages](http://theverydarkness.gitee.io/website_dragonlion_sport/)进行低速访问。
您如果安装了 git，可以用命令行运行

```cmd
git clone --recursive https://github.com/TheVeryDarkness/website_dragonlion_sport.git
```

或

```cmd
git clone --recursive https://gitee.com/TheVeryDarkness/website_dragonlion_sport.git
```

以将本存储库下载到本地。或者您可以点击右上角的下载按钮，下载压缩包，再将其解压。

如此，您只需:grinning:在本地搭一个服务器，就可以用浏览器在本地查看网站。

## 使用说明

## 开发说明

对微信 PC 端浏览器，可以参考[常见问题](https://work.weixin.qq.com/api/doc/90001/90148/90457)。不过由于微信 PC 端浏览器版本比较低，在加载第 1、4 个界面时会出错，建议更换浏览器观看。

### 属性解释

由于没有做分开处理（其实在移植到 Vue 之前做过的，但就是懒得做，反正没几个人看），所以使用 JSON 语法描述属性值。

|   键    |      值      | 可选 |              类型               | 可能的值             |
| :-----: | :----------: | :--: | :-----------------------------: | -------------------- |
|  value  |     主值     |  否  |             字符串              |
|   sub   |    子节点    |  否  |            节点数组             |
|   src   |  视频源地址  |  是  |             字符串              |
| origin  |  网页源地址  |  是  |             字符串              |
|  frame  | 内联框架地址 |  是  |             字符串              |
|  from   | 内联框架来源 |  是  |             字符串              | vqq, youku, bilibili |
|  range  | 片段时间范围 |  是  |  字符串的一维数组（长度为 2）   |
| comment |     评论     |  是  | 字符串的二维数组（形状为 2\*x） |

比如

```json
"龙狮一家亲"
```

是合法的 value 属性值。

```json
[["老张", "。"]]
```

是合法的 comment 属性值。

```json
["1314", "520"]
```

是合法（但无效，毕竟还没开始就结束了）的 range 属性值。
