//next imports
import Head from "next/head";
import Link from "next/link";

//styles
import styles from "../src/styles/pages/Home.module.scss";

//custom components
import Feature, { FeatureType } from "../src/components/Feature";
import HomeCardsData from "@/data/HomeCards";
import HomeCard from "@/components/HomeCard";

const features: Array<FeatureType> = [
	{
		name: "give",
	},
	{
		name: "enchant",
	},
	{
		name: "state",
	},
	{
		name: "locate",
	},
	{
		name: "difficulty",
	},
	{
		name: "experience",
	},
	{
		name: "gamerule",
	},
	{
		name: "loot",
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>MineGiver | The Minecrafter toolkit</title>
				<meta
					name="description"
					content="MineGiver is a webapp that helps players to create and search some related things about the game them love"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.mainContainer}>
				<div className={styles.titlesContainer}>
					<p className={styles.upTitle}>The Minecrafter toolkit</p>
					<h1 className={styles.title}>MineGiver</h1>
					<p className={styles.text}>
						An intuitive way for command generation, search
						information about other players and discover new things.
					</p>
				</div>

				<header className={styles.features}>
					<div className={styles.homeCardsContainer}>
						{HomeCardsData.map((cardProps) => (
							<HomeCard {...cardProps} />
						))}
					</div>
				</header>
			</main>
		</div>
	);
}
