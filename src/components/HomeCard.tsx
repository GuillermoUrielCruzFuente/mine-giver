import { HomeCardProps } from "@/data/HomeCards";
import Link from "next/link";
import styles from "@/styles/components/HomeCard.module.scss";

const HomeCard = ({ title, description, route }: HomeCardProps) => {
	return (
		<article className={styles.homeCard}>
			<div className={styles.imgContainer}>
			</div>

			<div className={styles.infoContainer}>
				<h1>{title}</h1>
				<p>{description}</p>
				<Link href={route}>{route}</Link>
			</div>
		</article>
	);
};

export default HomeCard;
