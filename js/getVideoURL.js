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
import { rootPath } from "./root";
export { videoSourceFetcher };
class videoSourceFetcher {
	constructor() {
		if (!localStorage)
			console.log("Local storage not supported.");
		this.fetchVideoSrcFromLocalStorage = function () {
			return new Promise((resolve, reject) => {
				if (!localStorage) reject("Not support action");
				const fromLocalStorage = localStorage.getItem("video");
				if (!fromLocalStorage)
					reject("No such item in local storage.");
				try {
					const parsed = JSON.parse(fromLocalStorage);
					resolve(parsed);
				} catch (error) {
					console.log("Data in local storage not available.");
					reject(error);
				}
			});
		};
		this.removeVideoSrcFromLocalStorage = function () {
			if (localStorage)
				localStorage.removeItem("video");
		};
		this.addVideoSrcToLocalStorage = function (tree) {
			if (localStorage)
				localStorage.setItem("video", JSON.stringify(tree));
		};
		this.fetchVideoSrcFromSameSite = function () {
			return fetch(rootPath + 'data/video.json', { method: "GET" }).then(res => { return res.json() });
		};
		this.fetchVideoSrcFromGitHub = function () {
			return fetch('https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', { method: "GET" }).then(res => { return res.json() });
		};
		return this;
	}
};