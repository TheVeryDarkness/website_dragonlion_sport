if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    linkSchemeStyle.href = "./dark.css";
else linkSchemeStyle.href = "./light.css";