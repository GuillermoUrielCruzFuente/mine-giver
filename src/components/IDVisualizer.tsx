import { Player } from "@/utils/fetchPlayer";

type Identifiers = Pick<Player, "id" | "rawId">;

const IDVisualizer = ({ id, rawId }: Identifiers) => {
	return (
		<>
			<p>{id}</p>
			<p>{rawId}</p>
		</>
	);
};

export default IDVisualizer;
