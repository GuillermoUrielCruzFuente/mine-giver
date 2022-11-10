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
					<h1>{data.username}</h1>

					<div className={styles.info}>
						<p className={styles.tag}>raw id</p>
						<p>{data.raw_id}</p>
					</div>

					<div className={styles.info}>
						<p className={styles.tag}>id</p>
						<p>{data.id}</p>
					</div>

					<h2>skin</h2>
					<div className={styles.imgContainer}>
						<Image
							src={data.avatar}
							alt={`${data.username}'s head, frontal render`}
							title={`${data.username}'s head, frontal render`}
							height={150}
							width={150}
						/>

						{/* 
							w / h
							180 / 167
							x	/ 150

							w = (180*150)/167 = 161.67664670658684
						*/}
						<Image
							src={`https://crafthead.net/cube/${data.raw_id}`}
							alt={`${data.username}'s head, isometric render`}
							title={`${data.username}'s head, isometric render`}
							height={150}
							width={161.67}
						/>
						{/* 
							w	/ h
							=========
							157 / 360
							x	/ 150
							=========
							*w = 65.41666666666667
						 */}
						<Image
							src={`https://crafthead.net/body/${data.raw_id}`}
							alt={`${data.username}'s full body, frontal render`}
							title={`${data.username}'s full body, frontal render`}
							height={150}
							width={65.41}
						/>

						{/* 
							2 / 1
							1 / 1

						 */}
						<div className={styles.skinContainer}>
							<Image
								src={`https://crafthead.net/skin/${data.raw_id}`}
								alt={`${data.username}'s skin`}
								title={`${data.username}'s skin`}
								fill={true}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
