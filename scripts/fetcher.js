window.fetcher = (what, lang) => {
	const title = document.getElementById("title");
	const article = document.getElementById("article");

	let url = "https://en.wikipedia.org/w/api.php?action=parse&prop=text&format=json&redirects=true&page=" + what + "&uselang=" + lang;

	fetch(url, {
		mode: "no-cors"
	}).then(res => {
		console.log(res);
		return res.text().then(t => {
			return t ? JSON.parse(t) : {parse: {title: "Hi", text: "Hellow"}};
		});
	}).then(json => {
		title.innerHTML = json.parse.title;
		article.innerHTML = json.parse.text;
	}).catch(console.log);
};