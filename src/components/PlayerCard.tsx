import { Player } from "@/utils/fetchPlayer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/PlayerCard.module.scss";
import Image from "next/image";

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
					<div className={styles.fullBodyContainer}>
						<h1>a</h1>
					</div>

					<div className={styles.infoContainer}>
						<div className={styles.nameLayout}>
							<div className={styles.headCubeContainer}>
								<Image
									src={`https://crafthead.net/cube/${data.raw_id}`}
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

						<div className={styles.info}>
							<p className={styles.tag}>raw id</p>
							<p>{data.raw_id}</p>
						</div>

						<div className={styles.info}>
							<p className={styles.tag}>id</p>
							<p>{data.id}</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
