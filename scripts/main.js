window.addEventListener("load", () => {
	burgerMenu("burger", "fetcher", "show");

    const title = document.getElementById("fTitle");
	const lang = document.getElementById("language-selector");
    document.getElementById("fetch").addEventListener("click", () => {
	    jsonp(title.value || "Hi", lang.value);
    });
});