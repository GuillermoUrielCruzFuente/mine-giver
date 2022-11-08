import { Player } from "@/utils/fetchPlayer";
import { motion, AnimatePresence } from "framer-motion";

const PlayerCard = ({ data }: { data?: Player }) => {
	return (
		<AnimatePresence>
			{!!data && (
				<motion.div
					initial={{ opacity: 0, translateY: 35 }}
					animate={{ opacity: 1, translateY: 0 }}
					exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
					transition={{ duration: 0.35 }}
					style={{
						color: "#333",
						border: "dashed 2px #fff",
						padding: "1rem",
						borderRadius: 16,
						marginTop: "3rem",
					}}
				>
					<h1>{data.username}</h1>
					<h2>{data.id}</h2>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PlayerCard;
