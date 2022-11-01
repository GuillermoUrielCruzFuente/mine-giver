import style from "../styles/components/Feature.module.scss";

export type FeatureType = {
	name: string;
};

const Feature = ({ name }: FeatureType) => {
	return (
		<div className={style.feature}>
			<h1>{name}</h1>
		</div>
	);
};

export default Feature;
