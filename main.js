/* 初始化 */

// Main
// function Main() {
//     nightModeToggle();
// }


/* HTML操作 */

// 添加全局样式
function addStyle(styleStr,id) {
	var htmlStyleTag = document.createElement("style");
	var styleText = document.createTextNode(styleStr);
	htmlStyleTag.setAttribute("id",id);
	htmlStyleTag.appendChild(styleText);
	document.getElementsByTagName("head")[0].appendChild(htmlStyleTag);
}
// 向body添加标签
function addTag(tagName,Content) {
	var tagObj = document.createElement(tagName);
	var tagContent = document.createTextNode(tagContent);
	tagObj.appendChild(tagContent);
}


/* 页面模式 */

// 夜间模式
function nightModeToggle() {
	var isNightMode = getCookie("PageTools_nm");
	if (isNightMode == "") {
		setCookie("PageTools_nm","true",9999);
		var styleStr = "*{background-color:#333!important;color:#888!important;border-color:#555!important;scrollbar-arrow-color:#ccc!important;scrollbar-base-color:#26a!important;scrollbar-shadow-color:#26a!important;scrollbar-face-color:#333!important;scrollbar-highlight-color:#26a!important;scrollbar-dark-shadow-color:#26a!important;scrollbar-3d-light-color:#26a!important;scrollbar-track-color:#333!important}a,a *{color:#8ad!important;text-decoration:none!important}a:visited,a:visited *,a:active,a:active *{color:#58a!important}a:hover,a:hover *{color:#ad8!important;background:#666!important}input,select,option,button,textarea{color:#aaa!important;background:#555!important;border:#666!important;border-color:#666 #888 #888 #666!important}input:focus,select:focus,option:focus,button:focus,textarea:focus,input:hover,select:hover,option:hover,button:hover,textarea:hover{color:#bbb!important;background:#5a5a5a!important;border-color:#777 #999 #999 #777!important}input[type=button],input[type=submit],input[type=reset],input[type=image]{border-color:#888 #666 #666 #888!important}input[type=button]:focus,input[type=submit]:focus,input[type=reset]:focus,input[type=image]:focus,input[type=button]:hover,input[type=submit]:hover,input[type=reset]:hover,input[type=image]:hover{color:#bbb!important;background:#666!important;border-color:#aaa #888 #888 #aaa!important}";
		addStyle(styleStr,"nightMode");
		return 1;
	}
	if (isNightMode == "false") {
		var styleStr = "*{background: #363636;color: #fff;}";
		addStyle(styleStr,"nightMode");
		setCookie("PageTools_nm","true",9999);
		return 1;
	}
	var styleTag = document.getElementById("nightMode");
	document.getElementsByTagName("head")[0].removeChild(styleTag);
	setCookie("PageTools_nm","false",9999);
	return 0;
}


/* Cookie操作 */

// 设置Cookie
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
// 获取Cookie
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
