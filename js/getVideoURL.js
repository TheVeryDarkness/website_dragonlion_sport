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
		this.fetchVideoSrcFromLocalStorage = function () {
			return new Promise((resolve, reject) => {
				const fromLocalStorage = localStorage.getItem("video");
				if (fromLocalStorage)
					resolve(JSON.parse(fromLocalStorage));
				else
					reject("No such item in local storage.");
			});
		};
		this.removeVideoSrcFromLocalStorage = function () {
			localStorage.removeItem("video");
		};
		this.addVideoSrcToLocalStorage = function (tree) {
			localStorage.setItem("video", JSON.stringify(tree));
		};
		this.fetchVideoSrcFromSameSite = function () {
			return fetch('data/video.json', { method: "GET" }).then(res => { return res.json() });
		};
		this.fetchVideoSrcFromGitHub = function () {
			return fetch('https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', { method: "GET" }).then(res => { return res.json() });
		};
	}
}