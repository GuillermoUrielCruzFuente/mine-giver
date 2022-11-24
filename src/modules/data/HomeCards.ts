export type HomeCardProps = {
	title: string;
	description: string;
	route: string;
};

const HomeCardsData: Array<HomeCardProps> = [
	{
		title: "commands",
		description:
			"Create your own commands, store and share them with your friends.",
		route: "/commands",
	},
	{
		title: "players",
		description:
			"Download skins, search your favorite Player and explore in a great 3D interface.",
		route: "/players",
	},
	{
		title: "technical mods",
		description:
			"Stay updated with the most popular Technical mod packs and never lost a release.",
		route: "/mods",
	},
	{
		title: "blog",
		description:
			"Read the last news in the minecraft community, some tips and opinions.",
		route: "/blog",
	},
];

export default HomeCardsData;
