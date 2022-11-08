import { motion } from "framer-motion";

const PlayerCard = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 30 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ duration: 0.5 }}
			style={{ color: "#333" }}
		>
			<h1>Hola</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Eveniet illo earum molestiae vero quos, rem magnam. Vitae
				distinctio tenetur repellat?
			</p>
		</motion.div>
	);
};

export default PlayerCard;
