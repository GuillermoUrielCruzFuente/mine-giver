import Image from "next/image";
import { SyntheticEvent, useRef, Dispatch, SetStateAction } from "react";
import fetchPlayer, { Player } from "@/utils/fetchPlayer";
import styles from "@/styles/components/PlayerSearchBar.module.scss";
import compassGif from "@/images/compass.webp";
import steve from "@/images/steve-using-spyglass.webp";

type DataSetter = {
	dataSetter: Dispatch<SetStateAction<Player | undefined>>;
};

const PlayerSearchBar = ({ dataSetter }: DataSetter) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = async (event: SyntheticEvent) => {
		event.preventDefault();

		const searchTerm = inputRef.current?.value;

		if (searchTerm) {
			const playerData = await fetchPlayer(searchTerm);
			dataSetter(playerData);
		}
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSearch}>
			<input ref={inputRef} type="text" placeholder="username/uuid" />
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
	);
};

export default PlayerSearchBar;
