const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Prevent ambiguous workspace-root detection when other lockfiles exist above this project.
	outputFileTracingRoot: path.join(__dirname),
};
module.exports = nextConfig;
