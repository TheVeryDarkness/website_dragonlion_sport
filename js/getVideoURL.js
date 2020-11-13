/*
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
class videoSourceFetcher {
	constructor() {
		if (!localStorage)
			console.log("Local storage not supported.");
		this.fetchVideoSrcFromLocalStorage = function () {
			return new Promise((resolve, reject) => {
				if (!localStorage) reject("Not support action");
				const fromLocalStorage = localStorage.getItem("video");
				if (fromLocalStorage)
					resolve(JSON.parse(fromLocalStorage));
				else
					reject("No such item in local storage.");
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
			return fetch('data/video.json', { method: "GET" }).then(res => { return res.json() });
		};
		this.fetchVideoSrcFromGitHub = function () {
			return fetch('https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', { method: "GET" }).then(res => { return res.json() });
		};
	}
};