import { HomeCardProps } from "@/data/HomeCardsData";
import Link from "next/link";
import styles from "@/styles/components/HomeCard.module.scss";

const HomeCard = ({ title, description, route, colors }: HomeCardProps) => {
	return (
		<article className={styles.homeCard}>
			<div
				className={styles.imgContainer}
				style={{ backgroundColor: colors.imageBG }}
			></div>

			<div
				className={styles.infoContainer}
				style={{ backgroundColor: colors.infoBG }}
			>
				<h1 style={{ color: colors.title }}>{title}</h1>
				<p style={{ color: colors.text }}>{description}</p>
				<Link href={route} style={{ backgroundColor: colors.button }}>
					{route}
				</Link>
			</div>
		</article>
	);
};

export default HomeCard;
