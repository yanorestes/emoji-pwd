function generatePassword() {
	var url = "https://raw.githubusercontent.com/yanorestes/emoji-pwd/master/emoji.json";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200) {
				var emojis = JSON.parse(request.responseText);
				var password = "";
				for (i=1; i<=27; i++) {
					var randomEmoji = emojis[Math.floor(Math.random()*emojis.length)];
					password += randomEmoji['emoji'];
				}
				var passwordOut = document.getElementById("pwd-out");
				passwordOut.textContent = password;
			}
		}
	}
	request.send();
}

function copyPassword() {
	var passwordOut = document.getElementById("pwd-out");
	var range = document.createRange();
	range.selectNodeContents(passwordOut);
	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("Copy");
}

var genBtn = document.getElementById('generate-btn');
genBtn.addEventListener('click', generatePassword);
var copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', copyPassword);