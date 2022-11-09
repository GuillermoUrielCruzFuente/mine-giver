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
					<h2>{data.id}</h2>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
