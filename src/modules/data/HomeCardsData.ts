export type HomeCardProps = {
	title: string;
	description: string;
	route: string;
	imageBGColor: string;
	titleColor: string;
	descriptionColor: string;
	buttonColor: string;
};

const HomeCardsData: Array<HomeCardProps> = [
	{
		title: "commands",
		description:
			"Create your own commands, store and share them with your friends.",
		route: "/commands",
		imageBGColor: "",
		titleColor: "",
		descriptionColor: "",
		buttonColor: "",
	},
	{
		title: "players",
		description:
			"Download skins, search your favorite Player and explore in a great 3D interface.",
		route: "/players",
		imageBGColor: "",
		titleColor: "",
		descriptionColor: "",
		buttonColor: "",
	},
	{
		title: "technical mods",
		description:
			"Stay updated with the most popular Technical mod packs and never lost a release.",
		route: "/mods",
		imageBGColor: "",
		titleColor: "",
		descriptionColor: "",
		buttonColor: "",
	},
	{
		title: "blog",
		description:
			"Read the last news in the minecraft community, some tips and opinions.",
		route: "/blog",
		imageBGColor: "",
		titleColor: "",
		descriptionColor: "",
		buttonColor: "",
	},
];

export default HomeCardsData;
