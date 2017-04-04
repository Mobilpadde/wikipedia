window.langr = (code, long) => {
	const selector = document.getElementById("language-selector");
	const option = document.createElement("option");
	option.value = code;
	option.innerHTML = long;

	selector.appendChild(option);
};