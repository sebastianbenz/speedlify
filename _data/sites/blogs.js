module.exports = {
	name: "Blogs", // optional, falls back to object key
	description: "Comparing site builder blog templates",
	options: {
		frequency: 60 * 24, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://sbenz8.wixsite.com/ctr-blog",
		"https://sbenz8.wixsite.com/ctr-blog/post/the-guide-to-successful-photography-blogging",
    "https://stingray-cyan-ky9t.squarespace.com/",
    "https://stingray-cyan-ky9t.squarespace.com/blog/Blog%20Post%20Title%20One-9a46f",
    "https://amp-wp.org/",
    "https://amp-wp.org/introducing-v2-0-of-the-official-amp-plugin-for-wordpress/",
    "https://ctr871134341.wordpress.com/2021/07/30/example-post-3/",
    "https://ctr871134341.wordpress.com/",
	]
};
