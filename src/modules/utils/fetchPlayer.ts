import { CamelCasedProperties } from "type-fest";

export type RawPlayer = {
	username: string;
	id: string;
	raw_id: string;
	avatar: string;
	name_history: Array<string>;
	meta: {};
};

export type Player = CamelCasedProperties<RawPlayer>;

const PLAYER_ENDPOINT = "https://playerdb.co/api/player/minecraft/";

const playerNotFound = (response: Response) =>
	response.status > 400 && response.status < 500 && !response.ok;

const fetchPlayer = async (identifier: string): Promise<Player | undefined> => {
	try {
		const playerRequest = await fetch(PLAYER_ENDPOINT + identifier);

		if (playerNotFound(playerRequest)) {
			throw new Error("That player does not exist");
		}

		const fetchedData = await playerRequest.json();

		const playerData = fetchedData.data.player as RawPlayer;

		const player: Player = {
			username: playerData.username,
			id: playerData.id,
			rawId: playerData.raw_id,
			avatar: playerData.avatar,
			nameHistory: playerData.name_history,
			meta: playerData.meta,
		};

		return player;
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

export default fetchPlayer;
