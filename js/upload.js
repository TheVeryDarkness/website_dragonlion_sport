/*
For uploading, no abusing!
*/
const client_id = "M0aXGWKPijslrlbObC2A6mLK";
function upload() {
    var xmlhttp = new XMLHttpRequest();
    /*
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
    }
    */
    xmlhttp.open("POST", "https://openapi.baidu.com/oauth/2.0/authorize?\
    response_type=code&\
    client_id=M0aXGWKPijslrlbObC2A6mLK&\
    redirect_uri=oob&\
    scope=basic,netdisk", false);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", " https://openapi.baidu.com");
    xmlhttp.send();
    alert(xmlhttp.responseText);
}
`
https://openapi.baidu.com/oauth/2.0/authorize?
	response_type=token&
	client_id=Va5yQRHlA4Fq4eR3LT0vuXV4&
	redirect_uri=http%3A%2F%2Fwww.example.com%2Foauth_redirect&`