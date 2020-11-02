/*
For uploading, no abusing!
*/
const client_id = "M0aXGWKPijslrlbObC2A6mLK";
function upload() {
	try {
		var xmlhttp = new XMLHttpRequest();
		/*
		xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						alert(xmlhttp.responseText);
				}
		}
		*/
		/*
		 xmlhttp.open("POST", "https://openapi.baidu.com/oauth/2.0/authorize?\
		 response_type=code&\
		 client_id=M0aXGWKPijslrlbObC2A6mLK&\
		 redirect_uri=oob&\
		 scope=basic,netdisk", false);
		 */
		xmlhttp.open("POST", "https://openapi.baidu.com/rest/2.0/passport/users/getInfo?\
        access_token=121.0c569b3a3855809613f1e363ce50f6a7.Ysvv7yEy--di2GMIpygTt2QslN4ikhscdHmU0sL._nEJfw", false);
		xmlhttp.withCredentials = true;
		xmlhttp.setRequestHeader('Content-Type', 'application/json')
		/*
		xmlhttp.setRequestHeader('Access-Control-Max-Age', '3628800');
		xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT');
		xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'content-type');
		xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "https://openapi.baidu.com");
		xmlhttp.setRequestHeader("origin", "https://openapi.baidu.com");
		*/
		xmlhttp.send();
		alert(xmlhttp.responseText);
	} catch (error) {
		alert("https://pan.baidu.com/disk/home");
		throw error;
	}
}

`
https://openapi.baidu.com/oauth/2.0/authorize?
	response_type=token&
	client_id=Va5yQRHlA4Fq4eR3LT0vuXV4&
    redirect_uri=http%3A%2F%2Fwww.example.com%2Foauth_redirect&
`