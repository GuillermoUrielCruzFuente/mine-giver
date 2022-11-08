import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/pages/Players.module.scss";
import PlayerSearchBar from "@/components/PlayerSearchBar";
import { Player } from "@/utils/fetchPlayer";
import { motion } from "framer-motion";
import PlayerCard from "@/components/PlayerCard";

const Players = () => {
	const [playerData, setPlayerData] = useState<Player | undefined>();

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

				<PlayerSearchBar dataSetter={setPlayerData} />

				<PlayerCard data={playerData} />
			</main>
		</div>
	);
};

export default Players;
