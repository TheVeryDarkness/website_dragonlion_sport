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
function fetchVideoSrc() {
	return fetch('https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json', {
		method: "GET"
	}).then(res => { return res.json(); })
}