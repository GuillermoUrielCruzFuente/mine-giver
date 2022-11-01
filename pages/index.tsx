import Head from "next/head";
import styles from "../src/styles/pages/Home.module.scss";

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
				<title>MineGiver | Minecraft Command Generator</title>
				<meta
					name="description"
					content="minecraft command generator"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.mainContainer}>
				<h1 className={styles.title}>MineGiver</h1>
				<p className={styles.text}>
					An easy eay to create powerful minecraft commands.
				</p>

				<div className={styles.featuresContainer}>
					{features.map((feat: FeatureType) => {
						return <Feature key={feat.name} name={feat.name} />;
					})}
				</div>
			</main>
		</div>
	);
}
