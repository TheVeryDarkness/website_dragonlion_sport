/*
	require root.js

	Format:
		sport
			time
				event
					group
						action
	Rank (Suggestion):
		value
		range
		score(for group)
		src
		origin
		frame
		from
		sub
*/
export { embededVideoSrc, fetchVideoSrcFromLocalStorage, fetchVideoSrcFromGitHub, addVideoSrcToLocalStorage, removeVideoSrcFromLocalStorage };

if (!sessionStorage)
	console.log("Local storage not supported.");

function embededVideoSrc() {
	const s = require("../data/video.json");
	return new Promise((resolve, reject) => { resolve(s); });
}
function fetchVideoSrcFromLocalStorage() {
	return new Promise((resolve, reject) => {
		if (!sessionStorage) reject("Not support action");
		const fromSessionStorage = sessionStorage.getItem("video");
		if (!fromSessionStorage)
			return reject("No such item in local storage.");
		try {
			const parsed = JSON.parse(fromSessionStorage);
			resolve(parsed);
		} catch (error) {
			console.log("Data in local storage not available.");
			reject(error);
		}
	});
};
function removeVideoSrcFromLocalStorage() {
	if (sessionStorage)
		sessionStorage.removeItem("video");
};
function addVideoSrcToLocalStorage(tree) {
	if (sessionStorage)
		sessionStorage.setItem("video", JSON.stringify(tree));
};
async function fetchVideoSrcFromGitHub() {
	const res = await fetch(
		'https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', {
		method: "GET", mode: "cors", referrer: "no-referrer"
	});
	if (res.ok) return res.json(); else throw res.statusText;
};