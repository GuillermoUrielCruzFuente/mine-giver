import styles from "@/styles/components/ThreePlayerRender.module.scss";
import { useEffect, useRef } from "react";
import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	NearestFilter,
	PerspectiveCamera,
	Scene,
	TextureLoader,
	WebGLRenderer,
} from "three";

import grassBottom from "@/images/grass_block/dirt.png";
import grassTop from "@/images/grass_block/grass_block_top.png";
import grassSide from "@/images/grass_block/grass_block_side.png";

const ThreePlayerRender = () => {
	const refRenderer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new Scene();

		//camera setup
		const fov = 75;
		const aspect = 1;
		const near = 0.1;
		const far = 5;
		const camera = new PerspectiveCamera(fov, aspect, near, far);

		//renderer setup and document append
		const renderer = new WebGLRenderer();
		renderer.setSize(350, 350);
		renderer.setClearColor(0x140236);
		refRenderer.current!.appendChild(renderer.domElement);

		//cube geometry
		const geometry = new BoxGeometry(1, 1, 1);

		//load the texture images
		const loader = new TextureLoader();
		const bottomTexture = loader.load(grassBottom.src);
		const topTexture = loader.load(grassTop.src);
		const sideTexture = loader.load(grassSide.src);

		//set the magFilter property to nearest, in order to avoid the pixels look blurry
		bottomTexture.magFilter = NearestFilter;
		topTexture.magFilter = NearestFilter;
		sideTexture.magFilter = NearestFilter;

		//order is important
		const grassBlockTexture: Array<MeshBasicMaterial> = [
			new MeshBasicMaterial({ map: sideTexture }), //right
			new MeshBasicMaterial({ map: sideTexture }), //left
			new MeshBasicMaterial({ map: topTexture }), //top
			new MeshBasicMaterial({ map: bottomTexture }), //bottom
			new MeshBasicMaterial({ map: sideTexture }), //front
			new MeshBasicMaterial({ map: sideTexture }), //back
		];

		const grassBlock = new Mesh(geometry, grassBlockTexture);

		scene.add(grassBlock);

		//set an appropiate camera distance
		camera.position.z = 1.5;

		const animate = () => {
			requestAnimationFrame(animate);

			grassBlock.rotation.x += 0.00915;
			grassBlock.rotation.y += 0.00915;

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			scene.clear();
			refRenderer.current!.removeChild(renderer.domElement);
		};
	}, []);

	return <div className={styles.renderContainer} ref={refRenderer}></div>;
};

export default ThreePlayerRender;
