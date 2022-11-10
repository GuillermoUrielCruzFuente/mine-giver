import { Player } from "@/utils/fetchPlayer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/PlayerCard.module.scss";

const PlayerCard = ({ data }: { data?: Player }) => {
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
					<h1>{data.username}</h1>

					<div className={styles.info}>
						<p className={styles.tag}>raw id</p>
						<p>{data.raw_id}</p>
					</div>

					<div className={styles.info}>
						<p className={styles.tag}>id</p>
						<p>{data.id}</p>
					</div>

					<h2>skins</h2>
					<div className={styles.imgContainer}>
						<img
							src={data.avatar}
							alt={`${data.username}'s head, frontal render`}
							title={`${data.username}'s head, frontal render`}
						/>

						<img
							src={`https://crafthead.net/cube/${data.raw_id}`}
							alt={`${data.username}'s head, isometric render`}
							title={`${data.username}'s head, isometric render`}
						/>

						<img
							src={`https://crafthead.net/body/${data.raw_id}`}
							alt={`${data.username}'s full body, frontal render`}
							title={`${data.username}'s full body, frontal render`}
						/>

						<img
							src={`https://crafthead.net/skin/${data.raw_id}`}
							alt={`${data.username}'s skin`}
							title={`${data.username}'s skin`}
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
