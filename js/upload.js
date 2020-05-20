function upload() {
    var xmlhttp = new XMLHttpRequest();
    /*
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
    }
    */
    xmlhttp.open("GET", "https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=M0aXGWKPijslrlbObC2A6mLK&redirect_uri=oob&scope=netdisk", false);
    xmlhttp.send();
    alert(xmlhttp.responseText);
}