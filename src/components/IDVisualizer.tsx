import { Player } from "@/utils/fetchPlayer";
import styles from "@/styles/components/IDVisualizer.module.scss";
import { useEffect, useState } from "react";

type Identifiers = Pick<Player, "id" | "rawId">;

const IDVisualizer = ({ id, rawId }: Identifiers) => {
	const [selection, setSelection] = useState(rawId);

	const copyToClipBoard = () => {
		navigator.clipboard.writeText(selection);
	};

	const setInputValueToId = () => {
		setSelection(id);
	};

	const setInputValueToRawId = () => {
		setSelection(rawId);
	};

	useEffect(() => {
		setSelection(rawId);
	}, [rawId]);

	return (
		<div className={styles.IDVisualizerContainer}>
			<p className={styles.topic}>UUID</p>

			<div className={styles.switcher}>
				<div className={styles.switcherButtonsContainer}>
					<button
						className={
							selection === rawId
								? styles.switcherButtonActive
								: styles.switcherButton
						}
						onClick={setInputValueToRawId}
					>
						raw
					</button>
					<button
						className={
							selection === id
								? styles.switcherButtonActive
								: styles.switcherButton
						}
						onClick={setInputValueToId}
					>
						full
					</button>
				</div>

				<div className={styles.idCoppier}>
					<input
						className={styles.idInput}
						type="text"
						value={selection}
						readOnly
					/>
					<button onClick={copyToClipBoard}>copy</button>
				</div>
			</div>
		</div>
	);
};

export default IDVisualizer;
