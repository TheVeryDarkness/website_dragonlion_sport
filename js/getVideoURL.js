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
export {
 getEmbededVideoSrc,
 fetchVideoSrcFromLocalStorage,
 fetchVideoSrcFromGitHub,
 fetchVideoSrcFromGitee,
 addVideoSrcToLocalStorage,
 removeVideoSrcFromLocalStorage,
};
const storage = require("./localStorage");

if (!fetch)
 alert("Fetch api is not supported, consider using another browser.");

function getEmbededVideoSrc() {
 const s = require("../data/video.json");
 return new Promise((resolve, reject) => {
  resolve(s);
 });
}
function fetchVideoSrcFromLocalStorage() {
 return new Promise((resolve, reject) => {
  const fromSessionStorage = storage.get("video");
  if (fromSessionStorage == null)
   return reject("No item named video in local storage.");
  try {
   const parsed = JSON.parse(fromSessionStorage);
   resolve(parsed);
  } catch (error) {
   console.log("Data in local storage not available.");
   reject(error);
  }
 });
}
function removeVideoSrcFromLocalStorage() {
 storage.remove("video");
}
function addVideoSrcToLocalStorage(tree) {
 storage.set("video", JSON.stringify(tree));
}
function fetchVideoSrcFromGitHub() {
 return fetch(
  "https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json",
  {
   method: "GET",
   mode: "cors",
   referrer: "no-referrer",
  }
 ).then((res) => {
  if (res.ok) return res.json();
  else throw res;
 });
}
function fetchVideoSrcFromGitee() {
 return fetch(
  "https://gitee.com/TheVeryDarkness/sport_data/raw/main/video.json",
  {
   method: "GET",
   mode: "same-origin",
  }
 ).then((res) => {
  if (res.ok) return res.json();
  else throw res;
 });
}
