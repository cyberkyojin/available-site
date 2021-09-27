import fetch from "node-fetch";

function available(url) {
	return fetch(url)
		.then((response) => {
			let r = response.ok == true ? "accessible page" : "page not accessible";
			console.log(r);
		})
		.catch((err) => {
			console.log("website not accessible");
		});
}

available("https://google.com/");
