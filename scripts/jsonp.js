// http://stackoverflow.com/a/22780569/754471 - JSONP-cheat to overcome cors.
window.jsonp = (what, lang) => {
	const title = document.getElementById("title");
	const article = document.getElementById("article");

	const jsonpName = "j_" + Math.random().toString().substring(2);
	const url = "https://" + lang + ".wikipedia.org/w/api.php?action=parse&prop=text&format=json&redirects=true&page=" + what + "&callback=" + jsonpName;

	const script = document.createElement("script");
	script.src = url;

	window[jsonpName] = (data) => {
		if(data.error){
			title.innerHTML = data.error.info;
			article.innerHTML = ":c";

			return;
		}

		title.innerHTML = data.parse.title;
		article.innerHTML = data.parse.text["*"];

		document.body.removeChild(script);
		delete window[jsonpName];
	};

	document.body.appendChild(script);
};