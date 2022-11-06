import Head from "next/head";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styles from "../src/styles/pages/Players.module.scss";
import Image from "next/image";
//images
import compassGif from "../src/static/img/compass.webp";
import steve from "../src/static/img/steve-using-spyglass.webp";

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
				<h1 className={styles.title}>Players</h1>
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
					<div className={styles.buttonContainer}>
						<button type="submit">
							search
							{/* the parent div below prevents img overflow its parent (button) */}
							<div>
								<Image
									className={styles.compass}
									src={compassGif}
									alt="minecraft compass"
								/>
							</div>
						</button>

						<Image
							className={styles.steveImg}
							src={steve}
							alt="steve using the spyglass"
						/>

						<div className={styles.playerImgPatch}></div>
					</div>
				</form>

				{!!playerData ? (
					<div className={styles.playerInfoContainer}>
						<Image
							src={playerData?.avatar}
							width={200}
							height={200}
							alt={`${playerData?.username} head`}
							title={`${playerData?.username}'s head`}
						/>
						<div>
							<h1>{playerData?.username}</h1>
						</div>
					</div>
				) : (
					<p className={styles.noPlayerLabel}>
						this player does not exist
					</p>
				)}
			</main>
		</div>
	);
};

export default Players;
