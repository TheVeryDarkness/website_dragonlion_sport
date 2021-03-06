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
import { TreeRoot as Tree } from "./tree";
export {
  getEmbededVideoSrc,
  fetchVideoSrcFromLocalStorage,
  fetchVideoSrcFromWeb,
  addVideoSrcToLocalStorage,
  removeVideoSrcFromLocalStorage,
};
const storage = require("./localStorage");
const tree = import("../data/video.json");
interface source {
  url: string;
  init: RequestInit;
}
if (!fetch) {
  alert("Fetch api is not supported, consider using another browser.");
}

function getEmbededVideoSrc(): Promise<Tree> {
  return tree;
}
async function fetchVideoSrcFromLocalStorage() {
  const fromSessionStorage = storage.get("video");
  if (fromSessionStorage == null) throw "No item named video in local storage.";
  try {
    const parsed = JSON.parse(fromSessionStorage);
    return parsed;
  } catch (error) {
    console.log("Data in local storage not available.");
    throw error;
  }
}
function removeVideoSrcFromLocalStorage() {
  storage.remove("video");
}
function addVideoSrcToLocalStorage(tree: Tree) {
  storage.set("video", JSON.stringify(tree));
}
const videoSrcUrls: { [tag: string]: source } = {
  github: {
    url: "https://theverydarkness.github.io/sport_data/video.json",
    init: {
      method: "GET",
      mode: "cors",
      referrer: "no-referrer",
    },
  },
  raw_github: {
    url: "https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json",
    init: {
      method: "GET",
      mode: "cors",
      referrer: "no-referrer",
    },
  },
  gitee: {
    url: "https://gitee.com/TheVeryDarkness/sport_data/raw/main/video.json",
    init: {
      method: "GET",
      mode: "no-cors",
      referrer: "no-referrer",
    },
  },
};
async function fetchVideoSrc(desc: source) {
  const res = await fetch(desc.url, desc.init);
  if (res.ok) return res.json();
  else throw res;
}
async function fetchVideoSrcFromWeb() {
  for (const key in videoSrcUrls) {
    const element = videoSrcUrls[key];
    try {
      const res = await fetchVideoSrc(element);
      console.log("Successfully fetch from ", key);
      return res;
    } catch (e) {
      console.error("Error occurred when fetch from ", key);
      console.log(e);
    }
  }
}
