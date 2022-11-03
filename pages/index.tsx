//next imports
import Head from "next/head";
import Link from "next/link";

//styles
import styles from "../src/styles/pages/Home.module.scss";

//custom components
import Feature, { FeatureType } from "../src/components/Feature";

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
				<title>MineGiver | Minecraft Utils</title>
				<meta
					name="description"
					content="MineGiver is a webapp that helps players to create and search some related things about the game them love"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.mainContainer}>
				<h1 className={styles.title}>MineGiver</h1>
				<p className={styles.text}>A tool to help players</p>

				<hr />

				<h2>Command generator</h2>
				<div className={styles.featuresContainer}>
					{features.map((feat: FeatureType) => {
						return <Feature key={feat.name} name={feat.name} />;
					})}
				</div>

				<hr />

				<h2>Player related stuff</h2>
				<Link href="/players">Search player info</Link>

				<hr />
			</main>
		</div>
	);
}
