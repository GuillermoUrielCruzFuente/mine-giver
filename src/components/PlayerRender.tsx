import { useGLTF, useTexture } from "@react-three/drei";
import {
	NearestFilter,
	LinearMipMapLinearFilter,
	BufferGeometry,
	NormalBufferAttributes,
	Object3D,
} from "three";

type GLTFHookReturn = ReturnType<typeof useGLTF<string>> & {
	nodes: {
		[name: string]: Object3D & {
			geometry: BufferGeometry<NormalBufferAttributes>;
		};
	};
};

export const PlayerRender = () => {
	const { nodes } = useGLTF("/player.gltf") as GLTFHookReturn;

	const map = useTexture("/textures/KorsakovUlianov-skin.png", (texture) => {
		texture.magFilter = NearestFilter;
		texture.minFilter = LinearMipMapLinearFilter;
	});

	return (
		<group dispose={null}>
			<group position={[0, 0.5, 0]} rotation={[Math.PI, -0.218, Math.PI]}>
				{/* head group */}
				<group rotation={[0.221, -0.513, 0.11]}>
					{/* head */}
					<mesh
						geometry={nodes["9a9c1e5c-5c1f-c0cd-1fc3-cfa7ab6e7d4d"].geometry}
						position={[0, -1.5, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} />
					</mesh>

					{/* head wrapper */}
					<mesh
						geometry={nodes["aaf26cb3-200b-6c08-6a10-6140091b7548"].geometry}
						position={[0, -1.5, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} transparent={true} />
					</mesh>
				</group>

				{/* left arm group */}
				<group position={[0.313, -0.125, 0]} rotation={[0.165, -0.162, 0.211]}>
					{/* left arm */}
					<mesh
						geometry={nodes["cd0fa1f0-87b9-fa01-3500-1184048ef821"].geometry}
						position={[-0.313, -1.375, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} />
					</mesh>

					{/* leaft arm wrapper */}
					<mesh
						geometry={nodes["5729eae5-54d8-d259-4bf7-835b3a3cf6f6"].geometry}
						position={[-0.313, -1.375, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} transparent={true} />
					</mesh>
				</group>

				{/* right arm group*/}
				<group position={[-0.313, -0.125, 0]} rotation={[-0.422, 0.072, -0.159]}>
					{/* right arm */}
					<mesh
						geometry={nodes["a2a0bf8c-0001-3a1e-3428-05171c13ba86"].geometry}
						position={[0.313, -1.375, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} />
					</mesh>

					{/* right arm wrapper */}
					<mesh
						geometry={nodes["d941eb4f-38e9-ec1d-4e7d-7b4b73e1b760"].geometry}
						position={[0.313, -1.375, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} transparent={true} />
					</mesh>
				</group>

				{/* left leg group*/}
				<group position={[0.119, -0.75, 0]} rotation={[-0.164, -0.201, 0.132]}>
					{/* left leg */}
					<mesh
						geometry={nodes["a0db94fb-cb5b-15dd-5412-3783502f103f"].geometry}
						position={[-0.119, -0.75, 0]}
					>
						<meshStandardMaterial map={map} precision={"highp"} dithering={true} />
					</mesh>

					{/* left leg wrapper */}
					<mesh
						geometry={nodes["8819147f-2ca4-11e0-218c-e72e5eab8834"].geometry}
						position={[-0.119, -0.75, 0]}
					>
						<meshStandardMaterial map={map} precision={"highp"} transparent={true} />
					</mesh>
				</group>

				{/* right leg group*/}
				<group position={[-0.119, -0.75, 0]} rotation={[0.172, -0.029, -0.163]}>
					{/* right leg */}
					<mesh
						geometry={nodes["08e9b2f8-6d48-6899-4aab-f9ad2f54962c"].geometry}
						position={[0.119, -0.75, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} />
					</mesh>

					{/* right leg wrapper */}
					<mesh
						geometry={nodes["989dd4a2-775c-a557-3a07-114311670fd0"].geometry}
						position={[0.119, -0.75, 0]}
					>
						<meshBasicMaterial map={map} precision={"highp"} transparent={true} />
					</mesh>
				</group>

				{/* chest */}
				<mesh
					geometry={nodes["a2b44476-f503-a66c-1012-e8d39439321d"].geometry}
					position={[0, -1.5, 0]}
				>
					<meshBasicMaterial map={map} precision={"highp"} />
				</mesh>

				{/* chest wrapper */}
				<mesh
					geometry={nodes["30cd5dd4-2699-080d-150b-9ba16cee1f15"].geometry}
					position={[0, -1.5, 0]}
				>
					<meshBasicMaterial map={map} precision={"highp"} transparent={true} />
				</mesh>
			</group>
		</group>
	);
};

useGLTF.preload("/player.gltf");
