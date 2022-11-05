import Head from "next/head";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styles from "../src/styles/pages/Players.module.scss";
import Image from "next/image";
import compassGif from "../src/static/img/compass.webp";

type Player = {
	avatar: string;
	id: string;
	meta: Object;
	name_history: Array<string>;
	raw_id: string;
	username: string;
};

const Players = () => {
	const searchBarRef = useRef<HTMLInputElement>(null);
	const [playerData, setPlayerData] = useState<Player | null>();

	const fetchPlayerData = async (player: string) => {
		const PLAYER_ENDPOINT = `https://playerdb.co/api/player/minecraft/${player}`;

		try {
			const playerDataRequest = await fetch(PLAYER_ENDPOINT);

			if (playerDataRequest.status === 400) {
				noPlayerFound();
				throw new Error("The player name does not exist");
			}

			const playerData = await playerDataRequest.json();

			setPlayerData(playerData.data.player as Player);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSearch = (event: SyntheticEvent) => {
		event.preventDefault();

		if (searchBarRef.current) {
			const searchTerm = searchBarRef.current.value;
			searchTerm === ""
				? fetchPlayerData("Melatoninan")
				: fetchPlayerData(searchTerm);
		}
	};

	const noPlayerFound = () => {
		setPlayerData(null);
	};

	return (
		<div>
			<Head>
				<title>Minegiver - Get Player Info</title>

				<meta
					name="description"
					content="Search whoever player basic info"
				/>
			</Head>

			<main className={styles.mainContainer}>
				<h1 className={styles.title}>Player Finder</h1>
				<p className={styles.playerSearchDescription}>
					Start searching info about any player, just put his name/id
					in the box below.
				</p>

				<form className={styles.searchForm} onSubmit={handleSearch}>
					<input
						ref={searchBarRef}
						type="text"
						placeholder="username/uuid"
					/>
					<button type="submit">
						<div>
							search
							<Image src={compassGif} alt="minecraft compass" />
						</div>
					</button>
				</form>

				{!!playerData ? (
					<div className={styles.playerInfoContainer}>
						<img
							src={playerData?.avatar}
							alt={`player ${playerData?.username} head`}
						/>
						<div>
							<h1>{playerData?.username}</h1>
						</div>
					</div>
				) : (
					<p className={styles.noPlayerLabel}>
						Es probable que el jugador no exista
					</p>
				)}
			</main>
		</div>
	);
};

export default Players;
