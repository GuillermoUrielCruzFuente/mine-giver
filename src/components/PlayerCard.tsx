import { Player } from "@/utils/fetchPlayer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/PlayerCard.module.scss";
import Image from "next/image";
import IDVisualizer from "@/components/IDVisualizer";
import { forceSkinDownload } from "@/utils/forceDownload";

const PlayerCard = ({ data }: { data?: Player }) => {
	const handleSkinDownload = async () => {
		await forceSkinDownload(data!.username, data!.rawId);
	};

	return (
		<AnimatePresence>
			{!!data && (
				<motion.div
					initial={{ opacity: 0, translateY: 35 }}
					animate={{ opacity: 1, translateY: 0 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{ duration: 0.25 }}
					className={styles.playerContainer}
				>
					<div className={styles.fullBodyContainer}>
						<Image
							src={`https://crafthead.net/body/${data.rawId}`}
							alt={`${data.username}'s body`}
							fill={true}
						/>
					</div>

					<div className={styles.infoContainer}>
						<div className={styles.nameLayout}>
							<div className={styles.headCubeContainer}>
								<Image
									src={`https://crafthead.net/cube/${data.rawId}`}
									alt={`${data.username}'s head, isometric render`}
									title={`${data.username}'s head, isometric render`}
									fill={true}
								/>
							</div>

							<div className={styles.usernameContainer}>
								<p>username</p>
								<h1>{data.username}</h1>
							</div>
						</div>

						<IDVisualizer id={data.id} rawId={data.rawId} />

						<button
							className={styles.downloadButton}
							onClick={handleSkinDownload}
						>
							download skin
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
