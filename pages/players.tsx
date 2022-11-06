import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/pages/Players.module.scss";
import PlayerSearchBar from "@/components/PlayerSearchBar";
import { Player } from "@/utils/fetchPlayer";

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
