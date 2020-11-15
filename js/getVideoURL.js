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
const request = { method: "GET", mode: "cors", referrer: "no-referrer" };
class videoSourceFetcher {
	constructor() {
		if (!sessionStorage)
			console.log("Local storage not supported.");
		this.embededVideoSrc = function () {
			const s = require("../data/video.json");
			return new Promise((resolve, reject) => { resolve(s); });
		}
		this.fetchVideoSrcFromLocalStorage = function () {
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
		this.removeVideoSrcFromLocalStorage = function () {
			if (sessionStorage)
				sessionStorage.removeItem("video");
		};
		this.addVideoSrcToLocalStorage = function (tree) {
			if (sessionStorage)
				sessionStorage.setItem("video", JSON.stringify(tree));
		};
		this.fetchVideoSrcFromSameSite = async function () {
			const res = await fetch(rootPath + 'data/video.json', request);
			return res.json();
		};
		this.fetchVideoSrcFromGitHub = async function () {
			const res = await fetch('https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', request);
			return res.json();
		};
		return this;
	}
};