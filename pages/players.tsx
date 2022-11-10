import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/pages/Players.module.scss";
import PlayerSearchBar from "@/components/PlayerSearchBar";
import { Player } from "@/utils/fetchPlayer";
import PlayerCard from "@/components/PlayerCard";
import ThreePlayerRender from "@/components/ThreePlayerRender";

const Players = () => {
	const [playerData, setPlayerData] = useState<Player | undefined>();

	return (
		<div>
			<Head>
				<title>Minegiver - Get Player Info</title>

				<meta
					name="description"
					content="look for name availability or your favorite player skin"
				/>
			</Head>

			<main className={styles.mainContainer}>
				<h1 className={styles.title}>Players</h1>
				<p className={styles.playerSearchDescription}>
					Start searching info about any player, just put his name/id
					in the box below.
				</p>

				<PlayerSearchBar dataSetter={setPlayerData} />

				<PlayerCard data={playerData} />

				<ThreePlayerRender />
			</main>
		</div>
	);
};

export default Players;
