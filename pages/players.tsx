import Head from "next/head";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styles from "../src/styles/pages/Players.module.scss";

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
	const [data, setData] = useState<Player | null>();

	const fetchData = async (identifier: string) => {
		const playerDataRequest = await fetch(
			`https://playerdb.co/api/player/minecraft/${identifier}`
		);

		const data = await playerDataRequest.json();

		setData(data.data.player as Player);
	};

	const handleSearch = (event: SyntheticEvent) => {
		event.preventDefault();

		if (searchBarRef.current) {
			const searchTerm = searchBarRef.current.value;
			searchTerm === ""
				? fetchData("KorsakovUlianov")
				: fetchData(searchTerm);
		}
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
				<h1 className={styles.title}>Players Page</h1>
				<form onSubmit={handleSearch}>
					<input ref={searchBarRef} type="text" />
					<button type="submit">Buscar</button>
				</form>

				<div className={styles.playerInfoContainer}>
					<img
						src={data?.avatar}
						alt={`player ${data?.username} head`}
					/>
					<div>
						<h1>{data?.username}</h1>
						<p>id: {data?.raw_id}</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Players;
