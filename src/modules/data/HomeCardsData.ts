type CardColorSchema = {
	imageBG: string;
	infoBG: string;
	title: string;
	text: string;
	button: string;
};

export type HomeCardProps = {
	title: string;
	description: string;
	route: string;
	colors: CardColorSchema;
};

const HomeCardsData: Array<HomeCardProps> = [
	{
		title: "commands",
		description:
			"Create your own commands, store and share them with your friends.",
		route: "/commands",
		colors: {
			imageBG: "#462C1A",
			infoBG: "#CFA68B",
			title: "#4E6C32",
			text: "#403420",
			button: "#4E6C32",
		},
	},
	{
		title: "players",
		description:
			"Download skins, search your favorite Player and explore in a great 3D interface.",
		route: "/players",
		colors: {
			imageBG: "#120931",
			infoBG: "#DCD0F8",
			title: "#503D89",
			text: "#805334",
			button: "#6A4030",
		},
	},
	{
		title: "technical mods",
		description:
			"Stay updated with the most popular Technical mod packs and never lost a release.",
		route: "/mods",
		colors: {
			imageBG: "#470902",
			infoBG: "#F5C8C3",
			title: "#730C00",
			text: "#730C00",
			button: "#A41808",
		},
	},
	{
		title: "blog",
		description:
			"Read the last news in the minecraft community, some tips and opinions.",
		route: "/blog",
		colors: {
			imageBG: "#112946",
			infoBG: "#B6D0F2",
			title: "#2A4E7A",
			text: "#3163A3",
			button: "#2A4E7A",
		},
	},
];

export default HomeCardsData;
