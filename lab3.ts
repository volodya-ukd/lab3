// test in the chrome console

function palindrom(text) {
	let result = [];
	const filteredText = text.replace(/[^a-zа-я\s]/gi, "");
	filteredText.split(" ").forEach((word) => {
		if (word && word === word.split("").reverse().join("")) result.push(word);
	});
	return result;
}

console.log("palindrom", palindrom("1221#@# voov, heeh? adda. ada** ad"));
//----------------------------------
// for test validate_ip - https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
function validate_ip(ip) {
	const regex = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;
	return regex.test(ip);
}
console.log("validate_ip", validate_ip("172.16.254.1"));
console.log("validate_ip", validate_ip("01.02.03.04"));
//----------------------------------
// test here if your browser doesn't support navigator.appVersion - https://codepen.io/volodya-ukd/pen/popgmqo
function get_os() {
	if (navigator.appVersion.indexOf("Win") != -1) return "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) return "MacOS";
	if (navigator.appVersion.indexOf("Linux") != -1) return "Linux";
}

console.log("get_os", get_os());
