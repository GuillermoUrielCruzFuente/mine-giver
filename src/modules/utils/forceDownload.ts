/**
 * As of spring 2018 this is no longer possible for cross-origin hrefs.
 * So if you want to make a direct download it will not work as intended.
 * These functions bring us that capability.
 */

const toDataURL = async (url: string) => {
	const blob = await fetch(url).then((res) => res.blob());
	return URL.createObjectURL(blob);
};

const forceDownload = async (url: string, fileName: string) => {
	const a = document.createElement("a");
	a.href = await toDataURL(url);
	a.download = fileName;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

export const forceSkinDownload = async (username: string, rawId: string) => {
	const url = `https://crafthead.net/skin/${rawId}.png`;

	await forceDownload(url, `${username}-skin`);
};

export default forceDownload;
