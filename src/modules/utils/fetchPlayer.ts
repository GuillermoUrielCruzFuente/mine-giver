export type Player = {
	username: string;
	id: string;
	raw_id: string;
	avatar: string;
	name_history: Array<string>;
};

const PLAYER_ENDPOINT = "https://playerdb.co/api/player/minecraft/";

const playerNotFound = (response: Response) =>
	response.status > 400 && response.status < 500 && !response.ok;

const fetchPlayer = async (identifier: string): Promise<Player | undefined> => {
	try {
		const playerRequest = await fetch(PLAYER_ENDPOINT + identifier);

		if (playerNotFound(playerRequest)) {
			throw new Error("That player does not exist");
		}

		const playerData = await playerRequest.json();

		return playerData.data.player as Player;
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

export default fetchPlayer;
